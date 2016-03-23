import Logger from 'js-logger';
import { ATTRIBUTES, MESSAGES, QUERIES } from 'constants';
import { dispatchMessage } from 'end/actions';

export default function print() {
  const assets = selectedAssets();

  if (assets.length < 1) {
    Logger.warn('No assets selected to print');
    return;
  }

  dispatchMessage(MESSAGES.PRINT, assets);
}

function selectedAssets() {
  const elements = document.querySelectorAll(QUERIES.ASSETS_SELECTED);
  let assets = [...elements];
  return assets.map(elementToAsset);
}

function elementToAsset(element) {
  var asset = {};

  for (let key in ATTRIBUTES.CLASSES) {
    const klass = ATTRIBUTES.CLASSES[key];
    const value = element.querySelector(`.${klass}`).innerText;
    asset[key] = value;
  }

  return asset;
}
