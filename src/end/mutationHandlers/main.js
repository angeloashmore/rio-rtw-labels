import Logger from 'js-logger'
import { OBSERVATIONS, QUERIES } from 'constants'
import { observe } from 'end/actions'

export default (observer) => {
  return (mutations) => {
    Logger.info('Mutations received', OBSERVATIONS.MAIN, mutations)

    const node = document.querySelector(QUERIES.ASSETS_OBSERVABLE)

    if (node) {
      observer.disconnect()
      Logger.info('No longer observing mutations', OBSERVATIONS.MAIN)

      // Begin observing on QUERIES.ASSETS_OBSERVABLE.
      observe(
        OBSERVATIONS.ASSETS_OBSERVABLE,
        QUERIES.ASSETS_OBSERVABLE,
        {
          attributeList: ['class'],
          attributes: true,
          childList: true,
          subtree: true
        })
    }
  }
}
