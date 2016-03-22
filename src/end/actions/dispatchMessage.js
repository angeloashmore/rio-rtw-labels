import Logger from "js-logger";

export default function dispatchMessage(...message) {
  Logger.info("Dispatching message", ...message);
  safari.self.tab.dispatchMessage(...message);
}
