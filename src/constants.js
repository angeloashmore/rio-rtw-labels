export const NAMESPACE = 'rio-rtw-labels';

export const ATTRIBUTES = {
  BUCKET: 'bucket',
  CLASSES: {
    description: 'description',
    partNumber: 'part_number',
    serialNumber: 'serial',
    bucket: 'bucket',
    location: 'location',
    group: 'group',
    category: 'category',
    position: 'position'
  },
  SERIAL_NUMBER_TEXT: 'serialNumberText'
};

export const BARCODE_VENDOR_PREFIX = 'S';

export const MESSAGE = 'message';
export const MESSAGES = {
  ERROR: 'error',
  PRINT: 'print'
};

export const OBSERVATIONS = {
  ASSETS: 'assets',
  ASSETS_PARENT: 'assetsParent'
};

export const QUERIES = {
  ASSETS: '.search-details-list',
  ASSETS_PARENT: '.master .body',
  ASSETS_SELECTED: '.search-details-item.selected',
  PRINT_BUTTON: id(ns('print', 'button')),
  PRINT_ROW: id(ns('print', 'row')),
  PRINT_ROW_PARENT: '#reports > .table'
};

export const SETTINGS = {
  OVERRIDE_PRINTER_NAME: 'overridePrinterName',
  USE_DEFAULT_PRINTER: 'useDefaultPrinter'
};

export const UNDEFINED = 'undefined';

function id(value) {
  return '#' + value;
}

function ns(...values) {
  const separator = '__';
  return [NAMESPACE, ...values].join(separator);
}
