import "babel-polyfill";
import "logger";
import Logger from "js-logger";
import dymo from "lib/dymo";
import { MESSAGE } from "constants";
import { messageHandler } from "end/handlers";

function init() {
  Logger.info("dymo.label.framework initialized");

  // Begin listening for messages.
  safari.self.addEventListener(MESSAGE, messageHandler, false);
  Logger.info("Now listening for messages");
}

function initShim() {
  // Initialize dymo.label.framework.
  dymo.label.framework.init(init);
}

window.onload = initShim;
