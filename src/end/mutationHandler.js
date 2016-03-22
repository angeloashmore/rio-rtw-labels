import Logger from "js-logger";
import { OBSERVATIONS, QUERIES } from "constants";
import { injectPrintButton } from "end/actions";

export default function mutationHandler(type) {
  return mutation => {
    Logger.info("Mutation received", type, mutation);

    switch (type) {
      case OBSERVATIONS.ASSETS:
        const selected = document.querySelectorAll(QUERIES.ASSETS_SELECTED);
        const existingButton = document.querySelector(QUERIES.PRINT_BUTTON);
        if (selected.length && !existingButton) injectPrintButton();
        break;

      default:
        Logger.error("Observation type not supported", type);
    }
  }
}
