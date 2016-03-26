import Logger from 'js-logger';
import {OBSERVATIONS, QUERIES} from 'constants';
import {observe} from 'end/actions';

const main = (observer) => {
  return (mutation) => {
    Logger.info('Mutation received', OBSERVATIONS.MAIN, mutation);

    const node = document.querySelector(QUERIES.ASSETS_SELECTION_TOOLBAR);

    if (node) {
      observer.disconnect();
      Logger.info('No longer observing mutations', OBSERVATIONS.MAIN);

      // Begin observing on QUERIES.ASSETS_SELECTION_TOOLBAR
      observe(
        OBSERVATIONS.ASSETS_SELECTION_TOOLBAR,
        QUERIES.ASSETS_SELECTION_TOOLBAR,
        {
          childList: true,
          subtree: true
        });
    }
  };
};

export default main;
