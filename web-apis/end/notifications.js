/**
 * The Notifications API(s)
 * https://developer.mozilla.org/en-US/docs/Web/API/Notification
 */

// The possible returns of requestPermission are,
// according to https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission
// granted: The user has explicitly granted permission for the current origin to display system notifications.
// denied: The user has explicitly denied permission for the current origin to display system notifications.
// default: The user decision is unknown; in this case the application will act as if permission was denied.

/**
 * This will check if we have permission to send out notifications in the browser
 * NOTE: there is a notification restriction possible in the user's Operating System!
 */
const hasPermission = async () => await Notification.requestPermission() === "granted";

/**
 * This will show a new notification
 * @param {*} message
 */
const showNotification = async ({ title, body, closeAfter = 1 }) =>
{
  // check if we have permission
  const isAllowed = await hasPermission();

  // first, check the permission
  if(!isAllowed) throw new Error("We do not have permission to show notifications.");

  // create a new notification
  // all possible options can be found here https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
  // new Notification(message);
  const n = new Notification(title, {
    body,
    icon: './images/anon-logo.png'
  });

  // close the notification after some time
  setTimeout(() => { n.close() }, parseInt(closeAfter) * 1000);
}

// show a notification when clicking on a button
document.getElementById('btnOpenNotification').addEventListener('click', () => showNotification({
  title: "Hello World!",
  body: "What A Nice Day!",
  closeAfter: 3
}));