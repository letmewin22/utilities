import {getWindow} from '../window-ssr'

type TFunc = () => void

const window = getWindow()

export class Resize {
  cbArray: Array<null | TFunc>
  constructor() {
    this.cbArray = []
    this.init()
  }

  bounds() {
    const methods = ['resizeHandler']
    methods.forEach(fn => {
      this[fn] = this[fn].bind(this)
    })
  }

  init() {
    this.bounds()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.resizeHandler)
    }
  }

  resizeHandler() {
    this.cbArray.forEach(cb => cb())
  }

  on(cb: TFunc): void {
    cb()
    this.cbArray.push(cb)
  }

  off(cb: TFunc): void {
    this.cbArray = this.cbArray.filter(e => e !== cb)
  }

  match(breakpoint: string, cb: TFunc): void {
    let mediaQuery: string

    if (breakpoint.startsWith('<')) {
      const value = breakpoint.slice(1)
      mediaQuery = `(max-width: ${value})`
    } else if (breakpoint.startsWith('>')) {
      const value = breakpoint.slice(1)
      mediaQuery = `(min-width: ${value})`
    } else {
      mediaQuery = `(min-width: ${breakpoint})`
    }

    const mql = window.matchMedia(mediaQuery)

    if (mql.matches) {
      cb()
    }

    mql.onchange = () => {
      if (mql.matches) {
        cb()
      }
    }
  }

  destroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.resizeHandler)
    }
  }
}

const resizeInstance = new Resize()

const resizeFunc = {
  on: (cb: TFunc): void => resizeInstance.on(cb),
  off: (cb: TFunc): void => resizeInstance.off(cb),
  match: (breakpoint: string, cb: TFunc): void =>
    resizeInstance.match(breakpoint, cb),
  destroy: (): void => resizeInstance.destroy(),
}

export default resizeFunc
