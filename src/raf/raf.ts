import {getWindow} from '../window-ssr'

type TFunc = (...args: any) => void

const window = getWindow()

export class RAF {
  cbArray: Array<null | TFunc>
  constructor() {
    this.cbArray = []
    this.animation = this.animation.bind(this)
    this.animation(0)
  }

  on(cb: TFunc): void {
    this.cbArray.push(cb)
  }

  off(cb: TFunc): void {
    this.cbArray = this.cbArray.filter(e => e !== cb)
  }

  animation(delta: number): void {
    this.cbArray.forEach(cb => cb(delta))
    window.requestAnimationFrame(this.animation)
  }
}

const RAFInstance = new RAF()

const rafFunc = {
  on: (cb: TFunc): void => RAFInstance.on(cb),
  off: (cb: TFunc): void => RAFInstance.off(cb),
}

export default rafFunc
