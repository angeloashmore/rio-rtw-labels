import Logger from 'js-logger'
import { MESSAGES } from 'constants'
import { print as printAssets } from 'global/actions'

export default (event) => {
  const { message: payload } = event

  Logger.info('Message received', MESSAGES.PRINT, payload)

  printAssets(payload)
}
