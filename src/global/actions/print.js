import Logger from 'js-logger'
import dymo from 'lib/dymo'
import { ATTRIBUTES, BARCODE_VENDOR_PREFIX, MESSAGES } from 'constants'
import { dispatchMessage, getPrinter } from 'global/actions'
import labelFile from 'assets/label.label'

const configureRecord = (record, asset) => {
  let key

  for (key in asset) {
    if (ATTRIBUTES.CLASSES.hasOwnProperty(key)) {
      record.setText(key, asset[key])
    }
  }

  // Special cases.
  record.setText(ATTRIBUTES.BUCKET, asset.bucket.toUpperCase())
  record.setText(ATTRIBUTES.SERIAL_NUMBER_BARCODE,
    BARCODE_VENDOR_PREFIX + asset.serialNumber)
}

export default (assets) => {
  const labelSet = new dymo.label.framework.LabelSetBuilder()

  assets.forEach((asset) => {
    const record = labelSet.addRecord()

    configureRecord(record, asset)
  })

  try {
    const label = dymo.label.framework.openLabelXml(labelFile)
    const printer = getPrinter()

    Logger.info('Printing assets', assets)
    label.print(printer, null, labelSet)
  } catch (error) {
    Logger.error(error.message)
    dispatchMessage(MESSAGES.ERROR, error.message)
  }
}
