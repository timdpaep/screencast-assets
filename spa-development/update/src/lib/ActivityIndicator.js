/**
 * An activity indicator component
 */

import Elements from './Elements';

export default () => {
  // create a loading text element
  const loadingText = Elements.createContainer({
    className: 'loader',
    innerHTML: 'Loading',
  });

  // create the activity indicator
  const activityIndicator = Elements.createContainer({
    className: 'activityindicator',
    children: [
      loadingText,
    ],
  });

  return activityIndicator;
};
