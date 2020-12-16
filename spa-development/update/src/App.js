/**
 * The App Wrapper
 */

import Router from './Router';
import initFirebase from './lib/Firebase';
import Component from './lib/Component';
import ActivityIndicator from './Components/ActivityIndicator';

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
      async (params) => {
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
      // clear the parent container
      this.clearContainer(this.parent);

      // pass the properties
      if (props) foundComponent.props = props;

      // if we have a sync renderer
      if (foundComponent.render) {
        this.parent.appendChild(foundComponent.render());
      }

      // if we have an async renderer
      if (foundComponent.renderAsync) {
        this.portal.appendChild(ActivityIndicator());
        foundComponent
          .renderAsync()
          .then((renderedComponent) => {
            this.clearContainer(this.portal);
            this.parent.appendChild(renderedComponent);
          });
      }
    }
  }
}

export default App;
