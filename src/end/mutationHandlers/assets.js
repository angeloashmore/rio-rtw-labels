import Logger from 'js-logger';
import {OBSERVATIONS, QUERIES} from 'constants';
import {injectPrintButton} from 'end/actions';

const assets = () => {
  return (mutation) => {
    Logger.info('Mutation received', OBSERVATIONS.ASSETS, mutation);

    const selected = document.querySelectorAll(QUERIES.ASSETS_SELECTED);
    const existingButton = document.querySelector(QUERIES.PRINT_BUTTON);

    if (selected.length && !existingButton) {
      injectPrintButton();
    }
  };
};

export default assets;
