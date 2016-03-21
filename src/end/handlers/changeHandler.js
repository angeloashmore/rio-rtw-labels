import Logger from "js-logger";
import { CHANGES, SETTINGS } from "constants";

export default function changeHandler(name, event) {
  switch (name) {
    case CHANGES.PRINTER:
      Logger.info("Handling change", name);
      const currentPrinter = safari.extension.settings.getItem(SETTINGS.PRINTER);
      Logger.debug("Current printer", currentPrinter);
      break;

    default:
      Logger.error("Change not supported", name);
  }
}
