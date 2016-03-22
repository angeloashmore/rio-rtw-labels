import h from "hyperscript";
import { QUERIES } from "constants";

export default function injectPrintButton() {
  const table = document.querySelector(QUERIES.REPORTS_TABLE);

  const child =
    h("li.table-row",
      h("label", "Print RTW Labels"),
      h("button#print-rtw-label.download"));

  table.appendChild(child);
}
