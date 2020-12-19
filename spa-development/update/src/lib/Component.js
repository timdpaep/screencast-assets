/**
 * The Component definition
 */

import Elements from './Elements';

class Component {
  constructor({
    name, model, routerPath, props = null,
  }) {
    this.name = name;
    this.model = model;
    this.routerPath = routerPath;
    this.componentContainer = this.createComponentContainer();
    this.props = props;
  }

  createComponentContainer() {
    return Elements.createContainer({
      id: `${this.name}Container`,
    });
  }

  clearComponentContainer() {
    while (this.componentContainer.firstChild) {
      this.componentContainer.removeChild(this.componentContainer.lastChild);
    }
  }
}

export default Component;
