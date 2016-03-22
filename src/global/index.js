import "logger";
import Logger from "js-logger";
import dymo from "lib/dymo";
import { CHANGE, COMMAND, MESSAGE } from "constants";
import eventHandler from "global/eventHandler";

function init() {
  Logger.info("dymo.label.framework initialized");

  // Begin listening for settings changes.
  safari.extension.settings.addEventListener(CHANGE, eventHandler(CHANGE), false);
  Logger.info("Now listening for settings changes");

  // Begin listening for commands.
  safari.application.addEventListener(COMMAND, eventHandler(COMMAND), false);
  Logger.info("Now listening for commands");
}

function initShim() {
  // Initialize dymo.label.framework.
  dymo.label.framework.init(init);
}

window.onload = initShim;
