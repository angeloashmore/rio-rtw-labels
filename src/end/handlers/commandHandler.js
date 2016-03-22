import Logger from "js-logger";
import { COMMANDS } from "constants";
import { injectPrintButton, printAssets } from "end/actions";

export default function commandHandler(name, event) {
  switch (name) {
    case COMMANDS.PRINT_ASSETS:
      Logger.info("Handling command", name);
      // printAssets();
      injectPrintButton();
      break;

    default:
      Logger.error("Command not supported", name);
  }
}
