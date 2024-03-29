import {getDocument} from './window-ssr'

const document = getDocument()

const createNewElement = (tag: string, classes: string): HTMLElement => {
  const elem = document.createElement(tag)
  elem.classList.add(classes)

  return elem
}

export {createNewElement}
