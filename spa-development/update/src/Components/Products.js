/**
 * The Products Component
 */

import Component from '../lib/Component';
import Elements from '../lib/Elements';
import Products from '../lib/Products';
import Router from '../Router';

class ProductsComponent extends Component {
  constructor() {
    super({
      name: 'products',
      routerPath: '/products',
      model: {
        products: [],
      },
    });
  }

  async loadProducts() {
    const products = await Products.getAll();
    this.model.products = products.map((p) => ({
      textContent: p.productName,
      onClick: () => Router.getRouter().navigate(`/product/${p.id}`),
    }));
  }

  async renderAsync() {
    // clear the component
    this.clearComponentContainer();

    // load products
    await this.loadProducts();

    // if we have products, render them out
    this.componentContainer.appendChild(
      Elements.createList({
        items: this.model.products,
      }),
    );

    // return the products container
    return this.componentContainer;
  }
}

export default ProductsComponent;
