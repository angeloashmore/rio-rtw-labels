import { UNDEFINED } from 'constants';

const messageHandlerShim = handlers => event => {
  const { name } = event;
  const handler = handlers[name];

  if (typeof handler !== UNDEFINED) return handler(event);

  return handlers.unknown(event);
};

export default messageHandlerShim;
