import Logger from "js-logger";

export default function dispatchMessage(...message) {
  safari.application.activeBrowserWindow.activeTab.page.
    dispatchMessage(...message);
}
