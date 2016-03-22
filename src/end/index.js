import "babel-polyfill";
import "logger";
import Logger from "js-logger";
import dymo from "lib/dymo";
import { MESSAGE, OBSERVATIONS, QUERIES } from "constants";
import { messageHandler, mutationHandler } from "end/handlers";

function init() {
  Logger.info("dymo.label.framework initialized");

  // Begin listening for messages.
  safari.self.addEventListener(MESSAGE, messageHandler, false);
  Logger.info("Now listening for messages");

  // Begin observing .search-details-list mutations.
  const observation = OBSERVATIONS.ASSETS;
  const target = document.querySelector(QUERIES.ASSETS);
  const handler = mutationHandler(observation);
  const observer = new MutationObserver(ms => ms.forEach(handler));
  const config = {
    attributes: true,
    attributeFilter: ["class"],
    childList: true,
    subtree: true
  };
  observer.observe(target, config);
  Logger.info(`Now observing mutations`, observation);
}

function initShim() {
  // Initialize dymo.label.framework.
  dymo.label.framework.init(init);
}

window.onload = initShim;
