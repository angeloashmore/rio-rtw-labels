export const NAMESPACE = 'rio-rtw-labels';
export const NAMESPACE_SEPARATOR = '__';

const id = (value) => {
  return '#' + value;
};

const ns = (...values) => {
  return [NAMESPACE, ...values].join(NAMESPACE_SEPARATOR);
};

export const ATTRIBUTES = {
  BUCKET: 'bucket',
  CLASSES: {
    bucket: 'bucket',
    category: 'category',
    description: 'description',
    group: 'group',
    location: 'location',
    partNumber: 'part_number',
    position: 'position',
    serialNumber: 'serial'
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
