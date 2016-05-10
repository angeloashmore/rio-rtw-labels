export const NAMESPACE = 'rio-rtw-labels'

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
}

export const BARCODE_VENDOR_PREFIX = 'S'

export const MESSAGE = 'message'
export const MESSAGES = {
  ERROR: 'error',
  PRINT: 'print'
}

export const OBSERVATIONS = {
  ASSETS_OBSERVABLE: 'assetsObservable',
  MAIN: 'main'
}

export const QUERIES = {
  ASSETS_OBSERVABLE: '#main .detail .master',
  ASSETS_SELECTED: '#main .detail .master .selected',
  MAIN: '#main',
  PRINT_BUTTON: '#' + NAMESPACE + '__print__button',
  PRINT_ROW: '#' + NAMESPACE + '__print__row',
  PRINT_ROW_PARENT: '#tasks > ul'
}

export const SETTINGS = {
  OVERRIDE_PRINTER_NAME: 'overridePrinterName',
  USE_DEFAULT_PRINTER: 'useDefaultPrinter'
}

export const UNDEFINED = 'undefined'
