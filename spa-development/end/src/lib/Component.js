/**
 * The Component definition
 */

class Component {
  constructor({
    name, model, routerPath, props = null,
  }) {
    this.name = name;
    this.model = this.proxyModel(model);
    this.routerPath = routerPath;
    this.reRender = null;
    this.props = props;
  }

  proxyModel(model) {
    return new Proxy(model, {
      set: (obj, prop, value) => {
        obj[prop] = value;
        if (this.reRender) this.reRender();
        return true;
      },
    });
  }
}

export default Component;
