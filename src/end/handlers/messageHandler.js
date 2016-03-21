import Logger from "js-logger";
import { CHANGE, COMMAND } from "constants";
import { changeHandler, commandHandler } from "end/handlers";

export default function messageHandler(event) {
  const { name, message: type } = event;

  Logger.info("Message received", type, name);

  switch (type) {
    case COMMAND:
      commandHandler(name, event);
      break;

    case CHANGE:
      changeHandler(name, event);
      break;

    default:
      Logger.error("Message type not supported", type);
  }
}
