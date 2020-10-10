/**
 * History API
 * More Information: https://developer.mozilla.org/en-US/docs/Web/API/about
 */

// We did in browser
/*window.history.back();
window.history.forward();
window.history.go(-1); // same as back
window.history.go(1); // same as forward
window.history.go(0); // refreshing the page
window.history.length; // amount of pages in browser*/

// Pushing, history manipulation. Add entries in history that will refresh your page.
// single page in a single page application
//
// Go back and forth
// history.pushState(null, null, "about");

// triggers when we open up a page
// window.addEventListener('popstate', (e) => console.log(e));

// passing data in pushState will set data
// in sate property, found in the event popstate

/**
 * Use Case Example
 */

// get some DOM elements
const buttons = document.querySelectorAll('.btnHistory');
const contents = document.querySelectorAll('#contentContainer div');

// when we click a button
const buttonClicked = (e) => {
  e.preventDefault();
  const name = e.target.dataset.name;
  showContent(name);
  history.pushState(
    { name },
    null,
    `content-${name.toLowerCase()}`
  )
}

// showing the content
const showContent = (name) => {
  // ---
  // Hide and show contents
  // ---
  contents.forEach(content => {
    if(content.classList.contains(`content${name}`)) {
      content.classList.remove('hide')
    } else {
      content.classList.add('hide');
    }
  });

  // ---
  // Change button active states
  // ---
  buttons.forEach(button => {
    if(button.dataset.name === name) button.classList.add('selected');
    else button.classList.remove('selected');
  })
}

// add eventlisteners to button
buttons.forEach((button) => button.addEventListener('click', buttonClicked));

// when the pop state changed
window.addEventListener('popstate', (e) => showContent(e.state.name));

// immediatly when the page fires, set the initial state to first content
history.replaceState(
  { name: buttons[0].dataset.name },
  null,
  `content-${buttons[0].dataset.name.toLowerCase()}`
)
