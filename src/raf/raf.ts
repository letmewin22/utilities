type TFunc = (...args: any) => void

export class RAF {
  cbArray: Array<null | TFunc>
  raf: number
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
    if (window) {
      this.raf = window.requestAnimationFrame(this.animation)
    }
  }

  destroy() {
    if (window) {
      window.cancelAnimationFrame(this.raf)
    }
    this.cbArray = []
  }
}

const RAFInstance = new RAF()

const rafFunc = {
  on: (cb: TFunc): void => RAFInstance.on(cb),
  off: (cb: TFunc): void => RAFInstance.off(cb),
  destroy: (): void => RAFInstance.destroy(),
}

export default rafFunc
