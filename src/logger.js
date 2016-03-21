import Logger from "js-logger";

Logger.useDefaults({
  formatter: (messages, context) => {
    messages.unshift("[Rio RTW Labels]");
    if (context.name) messages.unshift(`[${context.name}]`);
  }
});
