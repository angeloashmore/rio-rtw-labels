import "logger";
import Logger from "js-logger";
import i18next from "i18next";
import i18n from "i18n";
import { CHANGE, COMMAND } from "constants";
import eventHandler from "global/eventHandler";

console.log(i18n);

// Begin listening for settings changes.
safari.extension.settings.addEventListener(CHANGE, eventHandler(CHANGE), false);
Logger.info(t("Now listening for settings changes"));

// Begin listening for commands.
safari.application.addEventListener(COMMAND, eventHandler(COMMAND), false);
Logger.info(t("Now listening for commands"));
