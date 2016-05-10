import Logger from 'js-logger'
import { MESSAGES } from 'constants'

export default (event) => {
  const { message: payload } = event

  Logger.info('Message received', MESSAGES.ERROR, payload)

  Logger.error(payload)
}
