import i18next from "i18next";
import * as locales from "locales";

export default i18next.init({
  lng: "en",
  resources: locales,
  nsSeparator: false,
  keySeparator: false
});
