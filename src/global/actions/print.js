import Logger from "js-logger";
import dymo from "lib/dymo";
import { ATTRIBUTES, MESSAGES } from "constants";
import { dispatchMessage, getPrinter } from "global/actions";

const rawLabel = require("raw!assets/label.label");
const label = dymo.label.framework.openLabelXml(rawLabel);

export default function print(assets) {
  const labelSet = new dymo.label.framework.LabelSetBuilder();
  assets.forEach(configureLabel(labelSet.addRecord()));

  try {
    const printer = getPrinter();
    Logger.info("Printing assets", assets);
    label.print(printer, null, labelSet);
  } catch (e) {
    Logger.error(e.message);
    dispatchMessage(MESSAGES.ERROR, e.message);
  }
}

const configureLabel = label => asset => {
  for (let key in asset) {
    label.setText(key, asset[key]);
  }

  // Special cases.
  label.setText(ATTRIBUTES.SERIAL_NUMBER_DISPLAY, `S${asset.serialNumber}`);
  label.setText(ATTRIBUTES.DISPLAY, asset.bucket.toUpperCase());
};
