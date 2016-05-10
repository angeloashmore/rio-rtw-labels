import Logger from 'js-logger'
import hscript from 'hyperscript'
import { QUERIES } from 'constants'
import { print } from 'end/actions'
import iconPrint from 'assets/icon-print.svg'

const button = () => {
  const selected = document.querySelectorAll(QUERIES.ASSETS_SELECTED)
  const text = 'Print RTW Label' + (selected.length === 1 ? '' : 's')

  const style = {
    'background-image': 'url(' + iconPrint + ')'
  }

  const onclick = (event) => {
    event.preventDefault()
    print()
  }

  return (
  hscript('li.table-row' + QUERIES.PRINT_ROW,
    hscript('label', text),
    hscript('button.download' + QUERIES.PRINT_BUTTON,
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
