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
    this.model.product = await Products.getById(id);
  }

  async renderAsync() {
    await this.loadProduct(this.props.id);

    // destructure the data
    const {
      productName,
      productDescription,
    } = this.model.product;
    console.log(this.componentContainer);

    this.clearComponentContainer();

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

    // return the jokes container
    return this.componentContainer;
  }
}

export default ProductComponent;
