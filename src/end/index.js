import 'logger';
import Logger from 'js-logger';
import Safari from 'safari';
import {MESSAGE, OBSERVATIONS, QUERIES} from 'constants';
import messageHandlerShim from 'messageHandlerShim';
import * as messageHandlers from 'end/messageHandlers';
import {observe} from 'end/actions';

const init = () => {
  const messageHandler = messageHandlerShim(messageHandlers);

  // Begin listening for messages.
  Safari.self.addEventListener(MESSAGE, messageHandler, false);
  Logger.info('Now listening for messages');

  // Begin observing mutations on QUERIES.MAIN.
  observe(
    OBSERVATIONS.MAIN,
    QUERIES.MAIN,
    {
      childList: true,
      subtree: true
    });
};

window.onload = init;
