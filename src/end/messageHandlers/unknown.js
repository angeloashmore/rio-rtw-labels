import Logger from 'js-logger';

const unknown = event => {
  const { name: type, message: payload } = event;

  Logger.info('Message received', type, payload);

  Logger.error('Message type not supported', type);
};

export default unknown;
