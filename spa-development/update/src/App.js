/**
 * The App Wrapper
 */

import Router from './Router';
import initFirebase from './lib/Firebase';
import Component from './lib/Component';
import ActivityIndicator from './lib/ActivityIndicator';

class App {
  constructor(parent, portal) {
    this.parent = parent;
    this.portal = portal;
    this.components = [];
    initFirebase();
  }

  clearContainer(container) {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
  }

  addComponent(component) {
    if (!(component instanceof Component)) return;

    // destructure component
    const { name, routerPath } = component;

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
      this.clearContainer(this.parent);
      if (props) foundComponent.props = props;

      if (foundComponent.render) {
        this.parent.appendChild(foundComponent.render());
      }

      if (foundComponent.renderAsync) {
        this.portal.appendChild(ActivityIndicator());
        foundComponent
          .renderAsync()
          .then((renderedComponent) => {
            this.clearContainer(this.portal);
            this.parent.appendChild(renderedComponent);
          })
          .catch((error) => {
            console.error(error.message);
            this.clearContainer(this.portal);
          });
      }
    }
  }
}

export default App;
