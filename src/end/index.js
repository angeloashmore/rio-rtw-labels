import "logger";
import Logger from "js-logger";
import { MESSAGE, OBSERVATIONS, QUERIES } from "constants";
import mutationHandler from "end/mutationHandler";

function init() {
  // Begin observing mutations on QUERIES.ASSETS.
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

window.onload = init;
