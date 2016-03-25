import 'logger';
import Logger from 'js-logger';
import Safari from 'safari';
import dymo from 'lib/dymo';
import { MESSAGE } from 'constants';
import messageHandlerShim from 'messageHandlerShim';
import * as messageHandlers from 'global/messageHandlers';

function init() {
  Logger.info('dymo.label.framework initialized');

  // Begin listening for messages.
  const messageHandler = messageHandlerShim(messageHandlers);
  Safari.application.addEventListener(MESSAGE, messageHandler, false);
  Logger.info('Now listening for messages');
}

function initShim() {
  // Initialize dymo.label.framework.
  dymo.label.framework.init(init);
}

window.onload = initShim;
