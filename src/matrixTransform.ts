interface IScale {
  x: number | string
  y: number | string
  z?: number | string
}

interface IMove {
  x: number | string
  y: number | string
  z: number | string
}

export interface IParams {
  scale?: IScale
  move?: IMove
}

export const matrixTransform = (params: IParams = {}) => {
  const def: Record<string, IScale | IMove> = {
    scale: params.scale ?? {x: 1, y: 1},
    move: params.move ?? {x: 0, y: 0, z: 0},
  }

  const p = Object.keys(def).map(key => {
    const val = def[key]
    if (typeof val === 'string' || typeof val === 'number') {
      return {x: val, y: val, z: val}
    }

    return val
  })

  return `matrix3d(
    ${p[0].x ?? 1},0,0,0,
    0,${p[0].y ?? 1},0,0,
    0,0,1,0,
    ${p[1].x ?? 0},${p[1].y ?? 0},${p[1].z ?? 0},1
    )`
}
