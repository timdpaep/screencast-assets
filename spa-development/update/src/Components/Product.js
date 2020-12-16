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
  }

  async loadProduct(id) {
    const product = await Products.getById(id);
    this.model.product = product;
  }

  async renderAsync() {
    // load products
    await this.loadProduct(this.props.id);

    // destructure data
    const {
      productName,
      productDescription,
    } = this.model.product;

    // clearing the
    this.clearComponentContainer();

    // if we have products, render them out
    this.componentContainer.appendChild(
      Elements.createHeader({
        textContent: productName,
      }),
    );

    this.componentContainer.appendChild(
      Elements.createParagraph({
        textContent: productDescription,
      }),
    );

    // return the product container
    return this.componentContainer;
  }
}

export default ProductComponent;
