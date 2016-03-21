import Logger from "js-logger";
import { ASSETS } from "constants";

export default function printAssets() {
  const assets = retrieveSelectedAssets();

  if (assets.length < 1) {
    Logger.warn("No assets selected to print");
    return;
  }

  Logger.info("Sending to printer", assets)
}

function retrieveSelectedAssets() {
  var assets = [];

  const elements = document.querySelectorAll(ASSETS.QUERY);

  for (var element of elements) {
    const asset = elementToAsset(element);
    assets.push(asset);
  }

  return assets;
}

function elementToAsset(element) {
  var asset = {};

  for (var key in ASSETS.ATTRIBUTES) {
    const klass = ASSETS.ATTRIBUTES[key];
    const value = element.querySelector(`.${klass}`).innerText;
    asset[key] = value;
  }

  return asset;
}
