import Logger from 'js-logger'
import { NAMESPACE } from 'constants'

const formatter = (messages) => {
  return messages.unshift('[' + NAMESPACE + ']')
}

Logger.useDefaults({ formatter })
