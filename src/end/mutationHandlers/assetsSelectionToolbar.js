import Logger from 'js-logger';
import {OBSERVATIONS, QUERIES} from 'constants';
import {injectPrintButton} from 'end/actions';

const assetsSelectionToolbar = () => {
  return (mutation) => {
    Logger.info('Mutation received', OBSERVATIONS.ASSETS_SELECTION_TOOLBAR, mutation);

    const node = document.querySelector(QUERIES.PRINT_ROW_PARENT);

    if (node) {
      injectPrintButton();
    }
  };
};

export default assetsSelectionToolbar;
