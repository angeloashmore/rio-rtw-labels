import "logger";
import Logger from "js-logger";
import dymo from "lib/dymo";
import { MESSAGE } from "constants";
import messageHandler from "global/messageHandler";

function init() {
  Logger.info("dymo.label.framework initialized");

  // Begin listening for messages.
  safari.application.addEventListener(MESSAGE, messageHandler, false);
  Logger.info("Now listening for messages");
}

function initShim() {
  // Initialize dymo.label.framework.
  dymo.label.framework.init(init);
}

window.onload = initShim;
