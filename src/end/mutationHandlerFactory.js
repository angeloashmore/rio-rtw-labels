import Logger from 'js-logger';
import { OBSERVATIONS, QUERIES } from 'constants';
import { injectPrintButton } from 'end/actions';

export default function mutationHandlerFactory(type) {
  switch (type) {
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
