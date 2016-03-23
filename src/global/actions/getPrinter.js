import dymo from "lib/dymo";
import { SETTINGS } from "constants";

export default function getPrinter() {
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
