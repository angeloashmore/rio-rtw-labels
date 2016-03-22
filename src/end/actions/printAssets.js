import Logger from "js-logger";
import { ATTRIBUTES, MESSAGES, QUERIES } from "constants";
import { dispatchMessage } from "end/actions";

export default function printAssets() {
  const assets = selectedAssets();

  if (assets.length < 1) {
    Logger.warn("No assets selected to print");
    return;
  }

  // Dispatch message to global to handle printing.
  dispatchMessage(MESSAGES.PRINT, assets);
}

function selectedAssets() {
  var assets = [];

  const elements = document.querySelectorAll(QUERIES.ASSETS_SELECTED);

  for (let element of elements) {
    const asset = elementToAsset(element);
    assets.push(asset);
  }

  return assets;
}

function elementToAsset(element) {
  var asset = {};

  for (let key in ATTRIBUTES) {
    const klass = ATTRIBUTES[key];
    const value = element.querySelector(`.${klass}`).innerText;
    asset[key] = value;
  }

  return asset;
}
