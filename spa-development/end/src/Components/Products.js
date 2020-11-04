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
    this.productsLoaded = false;
  }

  loadProducts() {
    if (!this.productsLoaded) {
      Products.getAll().then((data) => {
        this.model.products = data.map((p) => ({
          textContent: p.productName,
          href: `${Router.getRouter().link('/product')}/${p.id}`,
        }));
      });
      this.productsLoaded = true;
    }
  }

  render() {
    // create a products container
    const productsContainer = document.createElement('div');

    // destructure model
    const { products } = this.model;

    // load products
    this.loadProducts();

    // if we have products, render them out
    if (products.length === 0) {
      productsContainer.innerHTML = 'No products available';
    } else {
      productsContainer.appendChild(
        Elements.createList({
          items: this.model.products,
        }),
      );
    }

    // return the jokes container
    return productsContainer;
  }
}

export default ProductsComponent;
