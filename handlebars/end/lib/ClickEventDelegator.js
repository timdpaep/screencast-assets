/**
 * A Click Event Delegator
 */

class ClickEventDelegator {
  constructor() {
    this.events = new Map();
    document.addEventListener('click', this.handleEvent.bind(this));
  }

  addCallbackFor(match, callback) {
    this.events.set(match, callback);
  }

  handleEvent(event) {
    this.events.forEach((value, key) => {
      if(event.target.matches(key)) {
        this.events.get(key)(event);
      }
    });
  }
}

export default ClickEventDelegator;