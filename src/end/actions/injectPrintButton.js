import Logger from 'js-logger'
import hscript from 'hyperscript'
import { QUERIES } from 'constants'
import { print } from 'end/actions'
import iconPrint from 'assets/icon-print.svg'

const button = () => {
  const selected = document.querySelectorAll(QUERIES.ASSETS_SELECTED)
  const text = 'Print RTW Label' + (selected.length === 1 ? '' : 's')

  const style = {
    '-webkit-appearance': 'none',
    'background': `transparent center/100% url(${iconPrint}) no-repeat`,
    'border': '0 none',
    'cursor': 'pointer',
    'height': '40px',
    'margin': 0,
    'padding': 0,
    'border-top-left-radius': 0,
    'border-top-right-radius': 0,
    'border-bottom-right-radius': 0,
    'border-bottom-left-radius': 0,
    'outline': 'none',
    'position': 'absolute',
    'right': '5px',
    'top': '3px',
    'width': '40px'
  }

  const onclick = (event) => {
    event.preventDefault()
    print()
  }

  return (
    hscript('li.table-row' + QUERIES.PRINT_ROW,
      hscript('label', text),
      hscript('button' + QUERIES.PRINT_BUTTON,
        {
          onclick,
          style
        }))
  )
}

export default () => {
  const parent = document.querySelector(QUERIES.PRINT_ROW_PARENT)

  if (parent) {
    Logger.info('Injecting print button')
    parent.appendChild(button())
  }
}
