import Logger from 'js-logger';
import mutationHandlerFactory from 'end/mutationHandlerFactory';

export default function observe(observation, query, config) {
  const target = document.querySelector(query);
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutationHandlerFactory(observer, observation));
  });

  observer.observe(target, config);
  Logger.info('Now observing mutations', observation);

  return observer;
}
