import Logger from "js-logger";
import dymo from "lib/dymo";
import { ATTRIBUTES, MESSAGES, SETTINGS } from "constants";
import { dispatchMessage } from "global/actions";

const rawLabel = require("raw!assets/label.label");
const label = dymo.label.framework.openLabelXml(rawLabel);

export default function print(assets) {
  const labelSet = new dymo.label.framework.LabelSetBuilder();

  assets.forEach(asset => {
    const label = labelSet.addRecord();

    for (let key in asset) {
      label.setText(key, asset[key]);
    }

    // Add ATTRIBUTES.SERIAL_NUMBER_DISPLAY as a special case.
    label.setText(ATTRIBUTES.SERIAL_NUMBER_DISPLAY, `S${asset.serialNumber}`);
  });

  try {
    const printer = getPrinter();
    Logger.info("Printing assets", assets);
    label.print(printer, null, labelSet);
  } catch (e) {
    Logger.error(e.message);
    dispatchMessage(MESSAGES.ERROR, e.message);
  }
}

function getPrinter() {
  const printers = dymo.label.framework.getPrinters();
  if (printers.length < 1) throw new Error("No printers available");

  const settings = safari.extension.settings;

  if (settings[SETTINGS.USE_DEFAULT_PRINTER]) {
    return printers[0].name;
  } else {
    const index = printers.indexOf(SETTINGS.OVERRIDE_PRINTER_NAME);
    if (index == -1) throw new Error("Override printer not available");
    return printers[index].name;
  }
}
