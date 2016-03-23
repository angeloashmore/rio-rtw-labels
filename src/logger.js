import Logger from 'js-logger';
import { NAMESPACE } from 'constants';

Logger.useDefaults({
  formatter: messages => messages.unshift(`[${NAMESPACE}]`)
});
