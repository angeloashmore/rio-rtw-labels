import Logger from 'js-logger';
import { OBSERVATIONS, QUERIES } from 'constants';
import { observe } from 'end/actions';

const assetsParent = observer => mutation => {
  Logger.info('Mutation received', OBSERVATIONS.ASSETS_PARENT, mutation);

  const addedNodes = [...mutation.addedNodes];
  const klasses = addedNodes.map(node => node.className);
  const klass = QUERIES.ASSETS.substr(1);

  if (klasses.includes(klass)) {
    observe(OBSERVATIONS.ASSETS, QUERIES.ASSETS, {
      attributes: true,
      attributeFilter: ['class'],
      childNodes: true,
      subtree: true
    });

    observer.disconnect();
    Logger.info('No longer observing mutations', OBSERVATIONS.ASSETS_PARENT);
  }
};

export default assetsParent;
