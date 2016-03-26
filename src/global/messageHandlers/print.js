import Logger from 'js-logger';
import {MESSAGES} from 'constants';
import {print as printAssets} from 'global/actions';

const print = (event) => {
  const {message: payload} = event;

  Logger.info('Message received', MESSAGES.PRINT, payload);

  printAssets(payload);
};

export default print;
