import Logger from "js-logger";
import dymo from "lib/dymo";
import { MESSAGES } from "constants";
import { print } from "global/actions";

export default function messageHandler(event) {
  const { name, message: payload } = event;

  Logger.info("Message received", name, payload);

  switch (name) {
    case MESSAGES.PRINT:
      Logger.info("Handling message", name);
      print(payload);
      break;

    default:
      Logger.error("Message type not supported", name);
  }
}
