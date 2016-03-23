import Logger from "js-logger";
import h from "hyperscript";
import { QUERIES } from "constants";
import { print } from "end/actions";

export default function injectPrintButton() {
  const parent = document.querySelector(QUERIES.PRINT_ROW_PARENT);

  if (parent) {
    Logger.info("Injecting print button");
    parent.appendChild(button());
  }
}

function button() {
  // Used to pluralize button label.
  const selected = document.querySelectorAll(QUERIES.ASSETS_SELECTED);
  const text = `Print RTW ${pluralize("Label", selected.length)}`;

  return (
    h(`li.table-row${QUERIES.PRINT_ROW}`,
      h("label", text),
      h(`button.download${QUERIES.PRINT_BUTTON}`, { style, onclick }))
  );
}

function onclick(event) {
  event.preventDefault();
  print();
}

function pluralize(word, n) {
  if (n == 1) return word;
  return word + "s";
}

const style = {
  "background-image": `url(${require("url!assets/print.svg")})`
};
