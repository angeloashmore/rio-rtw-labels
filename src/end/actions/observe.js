import Logger from 'js-logger';
import * as mutationHandlers from 'end/mutationHandlers';

const observe = (observation, query, config) => {
  const observer = new MutationObserver((mutations) => {
    mutationHandlers[observation](observer);
  });

  const target = document.querySelector(query);

  observer.observe(target, config);
  Logger.info('Now observing mutations', observation);

  return observer;
};

export default observe;
