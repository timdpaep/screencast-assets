/**
 * An Activity Indicator component
 */

export default () => {
  const activityIndicator = document.createElement('div');
  activityIndicator.className = 'activityindicator';
  const loadingText = document.createElement('div');
  loadingText.className = 'loader';
  loadingText.innerHTML = 'Loading';
  activityIndicator.appendChild(loadingText);
  return activityIndicator;
};
