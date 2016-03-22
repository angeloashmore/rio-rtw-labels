import Logger from "js-logger";
import { ATTRIBUTES, QUERIES } from "constants";
import labelXML from "assets/label.label";

export default function printAssets() {
  const assets = selectedAssets();

  if (assets.length < 1) {
    Logger.warn("No assets selected to print");
    return;
  }

  Logger.info("Sending to printer", assets)
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
