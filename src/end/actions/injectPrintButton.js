import Logger from 'js-logger';
import hscript from 'hyperscript';
import {QUERIES} from 'constants';
import {print} from 'end/actions';
import {printIcon} from 'assets/print.svg';

const button = (() => {
  const selected = document.querySelectorAll(QUERIES.ASSETS_SELECTED);
  const text = 'Print RTW Label' + (selected.length ? 's' : '');

  const style = {
    'background-image': 'url(' + printIcon + ')'
  };

  const onclick = (event) => {
    event.preventDefault();
    print();
  };

  return (
    hscript('li.table-row' + QUERIES.PRINT_ROW,
      hscript('label', text),
      hscript('button.download' + QUERIES.PRINT_BUTTON,
        {
          onclick,
          style
        }))
  );
})();

const injectPrintButton = () => {
  const parent = document.querySelector(QUERIES.PRINT_ROW_PARENT);

  if (parent) {
    Logger.info('Injecting print button');
    parent.appendChild(button());
  }
};

export default injectPrintButton;
