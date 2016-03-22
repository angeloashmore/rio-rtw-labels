import Logger from "js-logger";
import { CHANGE, COMMAND } from "constants";

export default function eventHandler(type) {
  return event => {
    let name;

    switch (type) {
      case CHANGE:
        name = event.key;
        break;

      case COMMAND:
        name = event.command;
        break;

      default:
        Logger.error("Event type not supported", type);
    }

    Logger.info("Dispatching message", type, name);
    safari.application.activeBrowserWindow.activeTab.page.
      dispatchMessage(name, type);
  };
}
