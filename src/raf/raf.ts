import {getWindow} from 'ssr-window'

type TFunc = () => void

const window = getWindow()

export class RAF {
  cbArray: Array<null | TFunc>
  constructor() {
    this.cbArray = []
    this.animation = this.animation.bind(this)
    this.animation()
  }

  on(cb: TFunc): void {
    this.cbArray.push(cb)
  }

  off(cb: TFunc): void {
    this.cbArray = this.cbArray.filter(e => e !== cb)
  }

  animation(): void {
    this.cbArray.forEach(cb => cb())
    window.requestAnimationFrame(this.animation)
  }
}

const RAFInstance = new RAF()

export const raf = {
  on: (cb: TFunc): void => RAFInstance.on(cb),
  off: (cb: TFunc): void => RAFInstance.off(cb),
}
