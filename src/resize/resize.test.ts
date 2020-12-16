import {Resize} from './resize'

const testFunction = () => {
  let i = 0
  while (i < 1000) i++
  return i
}

describe('Subscribe', () => {
  test('Should return true', () => {
    const raf = new Resize()
    raf.on(testFunction)
    expect(raf.cbArray.includes(testFunction)).toBe(true)
  })
  test('Should return false', () => {
    const raf = new Resize()
    raf.on(testFunction.bind(null))
    expect(raf.cbArray.includes(testFunction)).toBe(false)
  })
})

describe('Unsubscribe', () => {
  test('Should return true', () => {
    const raf = new Resize()
    raf.on(testFunction)
    raf.off(testFunction)
    expect(!raf.cbArray.includes(testFunction)).toBe(true)
  })
  test('Should return false', () => {
    const raf = new Resize()
    raf.on(testFunction.bind(null))
    raf.off(testFunction.bind(null))
    expect(raf.cbArray.includes(testFunction)).toBe(false)
  })
})
