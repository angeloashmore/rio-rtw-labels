import Safari from 'safari'
import dymo from 'lib/dymo'
import { SETTINGS } from 'constants'

export default () => {
  const printers = dymo.label.framework.getPrinters().map((printer) => {
    return printer.name
  })
  const settings = Safari.extension.settings

  if (printers.length < 1) {
    throw new Error('No printers available')
  }

  if (settings[SETTINGS.USE_DEFAULT_PRINTER]) {
    return printers[0]
  }

  if (!printers.includes(SETTINGS.OVERRIDE_PRINTER_NAME)) {
    throw new Error('Override printer not available')
  }

  return SETTINGS.OVERRIDE_PRINTER_NAME
}
