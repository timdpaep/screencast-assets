/**
 * The App Wrapper
 */

import Router from './Router';
import initFirebase from './lib/Firebase';
import Component from './lib/Component';

class App {
  constructor(parent) {
    this.parent = parent;
    this.components = [];
    initFirebase();
  }

  clearParent() {
    while (this.parent.firstChild) {
      this.parent.removeChild(this.parent.lastChild);
    }
  }

  addComponent(component) {
    if (!(component instanceof Component)) return;

    // destructure component
    const { name, routerPath } = component;

    // when component asks to rerender
    component.reRender = () => this.showComponent(component);

    // add component to our app
    this.components.push(component);

    // add to router
    // docs: https://github.com/krasimir/navigo
    Router.getRouter().on(
      routerPath,
      (params) => {
        this.showComponent({
          name,
          props: params,
        });
      },
    ).resolve();
  }

  showComponent({ name, props }) {
    const foundComponent = this.components.find((component) => component.name === name);
    if (foundComponent) {
      this.clearParent();
      if (props) foundComponent.props = props;
      this.parent.appendChild(foundComponent.render());
    }
  }
}

export default App;
