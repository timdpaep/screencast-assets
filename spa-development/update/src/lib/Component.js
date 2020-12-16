/**
 * The Component definition
 */

class Component {
  constructor({
    name, model, routerPath, props = null,
  }) {
    this.name = name;
    this.routerPath = routerPath;
    this.model = model;
    this.componentContainer = this.createComponentContainer();
    this.props = props;
  }

  createComponentContainer() {
    const componentContainer = document.createElement('div');
    componentContainer.setAttribute('id', `${this.name}Container`);
    return componentContainer;
  }

  clearComponentContainer() {
    while (this.componentContainer.firstChild) {
      this.componentContainer.removeChild(this.componentContainer.lastChild);
    }
  }
}

export default Component;
