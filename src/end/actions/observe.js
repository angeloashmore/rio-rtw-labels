import Logger from 'js-logger';
import * as mutationHandlers from 'end/mutationHandlers';

export default function observe(observation, query, config) {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutationHandlers[observation](observer));
  });

  const target = document.querySelector(query);

  observer.observe(target, config);
  Logger.info('Now observing mutations', observation);

  return observer;
}
