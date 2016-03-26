import Logger from 'js-logger';
import Safari from 'safari';

const dispatchMessage = (...message) => {
  Logger.info('Dispatching message', ...message);
  Safari.application.activeBrowserWindow.activeTab.page
    .dispatchMessage(...message);
};

export default dispatchMessage;
