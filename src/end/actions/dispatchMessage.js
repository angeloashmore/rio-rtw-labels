import Logger from 'js-logger'
import Safari from 'safari'

export default (...message) => {
  Logger.info('Dispatching message', ...message)
  Safari.self.tab.dispatchMessage(...message)
}
