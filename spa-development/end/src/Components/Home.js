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
  }

  render() {
    // destructure model
    const { counter } = this.model;

    // create a home container
    const homeContainer = document.createElement('div');

    // create a header
    homeContainer.appendChild(
      Elements.createHeader({
        textContent: `Current value is: ${counter}`,
      }),
    );

    // increment button
    homeContainer.appendChild(
      Elements.createButton({
        textContent: 'Increment',
        onClick: () => { this.incrementCounter(); },
      }),
    );

    // return the home container
    return homeContainer;
  }
}

export default HomeComponent;
