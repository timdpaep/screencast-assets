/**
 * The Drag & Drop API
 * https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
 */

/**
 * Get the drag & drop elements
 */
const dragDropBlock = document.getElementById('dragDropBlock');
const dragDropZones = document.querySelectorAll('.dragDropZone');

/**
 * Cancellation event
 */

const cancel = (e) => {
  if(e.preventDefault) e.preventDefault();
  if(e.stopPropagation) e.stopPropagation(); // more info: https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
  return false;
}

/**
 * Create the Drag & Drop API Event Callbacks
 */

const drag = (e) => {
  // console.log(e);
}

const dragStart = (e) => {
  console.log('DRAGSTART: the dragging has started');
  e.dataTransfer.setData('text/plain', e.target.id);
}

const dragEnd = (e) => {
  console.log('DRAGEND: the dragging has stopped');
}

const dragEnter = (e) => {
  console.log('DRAGENTER: the dragging entered a dropzone');
  e.target.style.border = '3px dotted red';
}

const dragLeave = (e) => {
  console.log('DRAGLEAVE: the dragDropBlock has left a dropzone');
  e.target.style.border = '';
}

const dragOver = (e) => {
  // cancel default behaviour
  cancel(e);
  console.log('DRAGOVER: the dragDropBlock is being dragged over a dropzone');
}

const drop = (e) => {
  // cancel default behaviour
  cancel(e);
  console.log('DROPPED: the dragDropBlock has been dropped on a dropzone');

  // online drop in a target that IS in fact a dropzone
  if (e.target.className === 'dragDropZone') {
    e.target.style.border = '';
    const data = e.dataTransfer.getData('Text');
    e.target.appendChild(document.getElementById(data));
    e.dataTransfer.clearData(); // clears the data in dataTransfer object
  }
}

/**
 * There are two dropzones, loop over them and addEventListeners
 */

dragDropZones.forEach((dragDropZone) => {
  dragDropZone.addEventListener('dragstart', dragStart); // when the dragging has started
  dragDropZone.addEventListener('dragend',dragEnd); // when the dragging has stopped
  dragDropZone.addEventListener('dragenter', dragEnter); // when we enter a dropzone
  dragDropZone.addEventListener('dragleave', dragLeave); // when we leaving a dropzone
  dragDropZone.addEventListener('dragover', dragOver); // when we are dragging over something
  dragDropZone.addEventListener('drop', drop); // when dropping the dragdropblock
});