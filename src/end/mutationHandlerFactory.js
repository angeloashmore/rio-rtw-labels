import Logger from 'js-logger';
import { OBSERVATIONS, QUERIES } from 'constants';
import { injectPrintButton, observe } from 'end/actions';

export default function mutationHandlerFactory(observer, type) {
  switch (type) {
  case OBSERVATIONS.MAIN:
    return mutation => {
      Logger.info('Mutation received', type, mutation);
      const klasses = [...mutation.addedNodes].map(node => node.className);
      if (klasses.includes(QUERIES.ASSETS.substr(1))) {
        observe(OBSERVATIONS.ASSETS, QUERIES.ASSETS, {
          attributes: true,
          attributeFilter: ['class'],
          childNodes: true,
          subtree: true
        });

        observer.disconnect();
        Logger.info('No longer observing mutations', type);
      }
    };

  case OBSERVATIONS.ASSETS:
    return mutation => {
      Logger.info('Mutation received', type, mutation);
      const selected = document.querySelectorAll(QUERIES.ASSETS_SELECTED);
      const existingButton = document.querySelector(QUERIES.PRINT_BUTTON);
      if (selected.length && !existingButton) injectPrintButton();
    };

  default:
    Logger.error('Observation type not supported', type);
    return () => {};
  }
}
