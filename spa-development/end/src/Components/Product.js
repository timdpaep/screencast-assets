/**
 * The Products Component
 */

import Component from '../lib/Component';
import Elements from '../lib/Elements';
import Products from '../lib/Products';

class ProductComponent extends Component {
  constructor() {
    super({
      name: 'product',
      routerPath: '/product/:id',
      model: {
        product: null,
      },
    });
    this.productLoaded = false;
  }

  loadProduct(id) {
    if (!this.productLoaded) {
      Products.getById(id).then((data) => { this.model.product = data; });
      this.productLoaded = true;
    }
  }

  render() {
    // create a products container
    const productContainer = document.createElement('div');

    // destructure model
    const { product } = this.model;

    // load products
    this.loadProduct(this.props.id);

    // if we have products, render them out
    if (!product) {
      productContainer.innerHTML = 'Product is loading...';
    } else {
      productContainer.appendChild(
        Elements.createHeader({
          textContent: this.model.product.productName,
        }),
      );
    }

    // return the jokes container
    return productContainer;
  }
}

export default ProductComponent;
