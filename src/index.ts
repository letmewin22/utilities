import raf from './raf/raf'
import resize from './resize/resize'
import {clamp, lerp} from './math'
import {createNewElement} from './createNewElement'
import {matrixTransform} from './matrixTransform'
import {delayPromise} from './delay'
import {keysGenerator} from './keysGenerator'

const exportObj = {
  raf,
  resize,
  clamp,
  lerp,
  createNewElement,
  matrixTransform,
  delayPromise,
  keysGenerator,
}

export {
  raf,
  resize,
  clamp,
  lerp,
  createNewElement,
  matrixTransform,
  delayPromise,
  keysGenerator,
}

export default exportObj
