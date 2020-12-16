/**
 * An Activity Indicator component
 */

import Elements from './Elements';

export default () => {
  const activityIndicator = Elements.createContainer({ className: 'activityindicator' });
  const loadingText = Elements.createContainer({ className: 'loader' });
  loadingText.innerHTML = 'Loading';
  activityIndicator.appendChild(loadingText);
  return activityIndicator;
};
