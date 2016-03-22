export const NAMESPACE = "rio-rtw-lables";

export const ATTRIBUTES = {
  description: "description",
  partNumber: "part_number",
  serialNumber: "serial",
  bucket: "bucket",
  location: "location",
  group: "group",
  category: "category",
  position: "position"
};

export const MESSAGE = "message";
export const MESSAGES = {
  PRINT: "print"
};

export const OBSERVATIONS = {
  ASSETS: "assets"
}

export const QUERIES = {
  ASSETS: ".search-details-list",
  ASSETS_SELECTED: ".search-details-item.selected",
  PRINT_BUTTON: id(ns("print", "button")),
  PRINT_ROW: id(ns("print", "row")),
  PRINT_ROW_PARENT: "#reports > .table"
};

export const SETTINGS = {
  PRINTER: "printer"
};

function id(value) {
  return "#" + value;
}

function ns(...values) {
  const separator = "__";
  return [NAMESPACE, ...values].join(separator);
}
