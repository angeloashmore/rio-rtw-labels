import Logger from 'js-logger'
import { ATTRIBUTES, MESSAGES, QUERIES } from 'constants'
import { dispatchMessage } from 'end/actions'

const toObject = (element) => {
  return Object.keys(ATTRIBUTES.CLASSES).reduce((prev, curr) => {
    const klass = ATTRIBUTES.CLASSES[curr]

    prev[curr] = element.querySelector('.' + klass).innerText

    return prev
  }, {})
}

export default () => {
  const selected = document.querySelectorAll(QUERIES.ASSETS_SELECTED)

  if (selected.length < 1) {
    Logger.warn('No assets selected to print')

    return
  }

  const objects = [...selected].map(toObject)

  dispatchMessage(MESSAGES.PRINT, objects)
}
