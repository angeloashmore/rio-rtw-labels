import Logger from 'js-logger';
import {OBSERVATIONS, QUERIES} from 'constants';
import {injectPrintButton} from 'end/actions';

const assetsObservable = () => {
  return (mutations) => {
    Logger.info('Mutations received', OBSERVATIONS.ASSETS_OBSERVABLE, mutations);

    const parent = document.querySelector(QUERIES.PRINT_ROW_PARENT);
    const row = document.querySelector(QUERIES.PRINT_ROW);

    if (parent && row) {
      parent.removeChild(row);
    }

    if (parent) {
      injectPrintButton();
    }
  };
};

export default assetsObservable;
