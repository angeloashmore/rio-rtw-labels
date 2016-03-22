import "logger";
import Logger from "js-logger";
import { MESSAGE, OBSERVATIONS, QUERIES } from "constants";
import mutationHandlerFactory from "end/mutationHandlerFactory";

function init() {
  // Begin observing mutations on QUERIES.ASSETS.
  const observation = OBSERVATIONS.ASSETS;
  const target = document.querySelector(QUERIES.ASSETS);
  const handler = mutationHandlerFactory(observation);
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

window.onload = init;
