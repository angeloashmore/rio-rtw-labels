import Logger from 'js-logger'

export default (event) => {
  const { name: type, message: payload } = event

  Logger.info('Message received', type, payload)

  Logger.error('Message type not supported', type)
}
