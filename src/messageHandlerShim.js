import { UNDEFINED } from 'constants'

export default (handlers) => {
  return (event) => {
    const { name } = event
    const handler = handlers[name]

    if (typeof handler !== UNDEFINED) {
      return handler(event)
    }

    return handlers.unknown(event)
  }
}
