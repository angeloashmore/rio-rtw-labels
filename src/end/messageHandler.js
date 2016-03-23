import Logger from 'js-logger';
import { MESSAGES } from 'constants';

export default function messageHandler(event) {
  const { name, message: payload } = event;

  Logger.info('Message received', name, payload);

  switch (name) {
  case MESSAGES.ERROR:
    Logger.info('Handling message', name);
    Logger.error(payload);
    break;

  default:
    Logger.error('Message type not supported', name);
  }
}
