/**
 * The Home Component
 */

import Component from '../lib/Component';
import Elements from '../lib/Elements';

class HomeComponent extends Component {
  constructor() {
    super({
      name: 'home',
      routerPath: '/',
      model: {
        counter: 0,
      },
    });
  }

  incrementCounter() {
    this.model.counter += 1;
    const counterElements = this.componentContainer.getElementsByClassName('counter');
    counterElements[0].innerHTML = this.counterString(this.model.counter);
  }

  counterString(counter) {
    return `Current value is: ${counter}`;
  }

  render() {
    // destructure model
    const { counter } = this.model;

    // clear our component container
    this.clearComponentContainer();

    // create a header
    this.componentContainer.appendChild(
      Elements.createHeader({
        textContent: this.counterString(counter),
        className: 'counter',
      }),
    );

    // increment button
    this.componentContainer.appendChild(
      Elements.createButton({
        textContent: 'Increment',
        onClick: () => { this.incrementCounter(); },
      }),
    );

    // return the componentContainer container
    return this.componentContainer;
  }
}

export default HomeComponent;
