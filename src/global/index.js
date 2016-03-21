import "logger";
import Logger from "js-logger";
import { CHANGE, COMMAND } from "constants";
import eventHandler from "global/eventHandler";

// Begin listening for settings changes.
safari.extension.settings.addEventListener(CHANGE, eventHandler(CHANGE), false);
Logger.info("Now listening for settings changes");

// Begin listening for commands.
safari.application.addEventListener(COMMAND, eventHandler(COMMAND), false);
Logger.info("Now listening for commands");
