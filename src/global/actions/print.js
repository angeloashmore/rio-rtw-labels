import Logger from 'js-logger';
import dymo from 'lib/dymo';
import { ATTRIBUTES, BARCODE_VENDOR_PREFIX, MESSAGES } from 'constants';
import { dispatchMessage, getPrinter } from 'global/actions';

const rawLabel = require('raw!assets/label.label');
const label = dymo.label.framework.openLabelXml(rawLabel);

export default function print(assets) {
  const labelSet = new dymo.label.framework.LabelSetBuilder();
  assets.forEach(asset => {
    const label = labelSet.addRecord();
    configureLabel(label, asset);
  });

  try {
    const printer = getPrinter();
    Logger.info('Printing assets', assets);
    label.print(printer, null, labelSet);
  } catch (e) {
    Logger.error(e.message);
    dispatchMessage(MESSAGES.ERROR, e.message);
  }
}

function configureLabel(label, asset) {
  for (let key in asset) {
    label.setText(key, asset[key]);
  }

  // Special cases.
  label.setText(ATTRIBUTES.BUCKET, asset.bucket.toUpperCase());
  label.setText(ATTRIBUTES.SERIAL_NUMBER_TEXT,
                BARCODE_VENDOR_PREFIX + asset.serialNumber);
}
