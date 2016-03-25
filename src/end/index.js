import 'logger';
import Logger from 'js-logger';
import Safari from 'safari';
import { MESSAGE, OBSERVATIONS, QUERIES } from 'constants';
import messageHandler from 'end/messageHandler';
import { observe } from 'end/actions';

function init() {
  // Begin listening for messages.
  Safari.self.addEventListener(MESSAGE, messageHandler, false);
  Logger.info('Now listening for messages');

  // Begin observing mutations on QUERIES.MAIN.
  observe(OBSERVATIONS.MAIN, QUERIES.MAIN, {
    childList: true,
    subtree: true
  });
}

window.onload = init;
