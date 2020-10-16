/**
 * The Product Card Object Descriptor
 */

const createRandomProductCardData = () => {
  return {
    pictureSource: `https://picsum.photos/id/${Math.floor(Math.random() * 300)}/640/480`,
    productPrice: parseFloat(faker.commerce.price()),
    productName: faker.commerce.productName(),
    productDescription: faker.commerce.productDescription()
  }
}

class ProductCard {
  constructor(
    { id, productName, productPrice, productDescription, pictureSource },
    editedCallback,
    removeCallback
  ) {
    this.id = id;
    this.productName = productName;
    this.productPrice = productPrice;
    this.productDescription = productDescription;
    this.pictureSource = pictureSource;
    this.editedCallback = editedCallback;
    this.removeCallback = removeCallback;
    this.articleElement = document.createElement('article');
  }

  updateName(newName) {
    const h2 = this.articleElement.querySelector('.article-content h2');
    const input = this.articleElement.querySelector('.input-edit input');
    h2.innerHTML = newName;
    input.value = newName;
  }

  destroy() {
    this.articleElement.parentElement.removeChild(this.articleElement);
    this.articleElement = null;
    this.editedCallback = null;
    this.removeCallback = null;
    this.id = null;
    this.productDescription = null;
    this.productPrice = null;
    this.productName = null;
  }

  render() {
    // creates the article element
    this.articleElement.dataset.id = this.id;
    this.articleElement.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3");

    /**
    * The head
    */

    const articleHead = document.createElement('div')
    articleHead.classList.add('article-head');

    // Image
    const productImageElement = document.createElement('img');
    productImageElement.src = this.pictureSource;
    productImageElement.alt = productImageElement.title = "Lorem Picsum";
    articleHead.appendChild(productImageElement);

    // Price
    const priceElement = document.createElement('div');
    priceElement.classList = 'price';
    priceElement.innerHTML = `€ ${this.productPrice}`
    articleHead.appendChild(priceElement);

    // Edit
    const btnEdit = document.createElement('a');
    btnEdit.classList = 'btn-edit';
    btnEdit.dataset.editing = 'false';
    btnEdit.innerHTML = 'Bewerk';
    articleHead.appendChild(btnEdit);
    btnEdit.addEventListener('click', (e) => {
      e.preventDefault();
      const isEditing = e.target.dataset.editing === 'true';
      const innerArticle = e.target.parentElement.parentElement;
      const h2 = innerArticle.querySelector('.article-content h2');
      const ie = innerArticle.querySelector('.article-content .input-edit');
      if(isEditing) {
        e.target.dataset.editing = 'false';
        h2.classList.remove("hide");
        e.target.classList.remove('save')
        e.target.innerHTML = "Bewerk";
        ie.classList.add("hide");
      } else {
        e.target.dataset.editing = 'true';
        e.target.classList.add('save');
        h2.classList.add("hide");
        e.target.innerHTML = "Stop bewerken";
        ie.classList.remove("hide");
      }
    });

    // Remove
    const btnRemove = document.createElement('a');
    btnRemove.classList = 'btn-remove';
    btnRemove.innerHTML = '<i class="fas fa-trash-alt"></i>';
    articleHead.appendChild(btnRemove);
    btnRemove.addEventListener('click', (e) => {
      e.preventDefault();
      if(this.removeCallback) this.removeCallback(this.id);
      this.destroy();
    })

    /**
    * The content
    */

    const articleContent = document.createElement('div')
    articleContent.classList.add('article-content');;

    // H2 Title
    const subtitleElement = document.createElement('h2');
    subtitleElement.innerHTML = this.productName;
    articleContent.appendChild(subtitleElement);

    // Input
    const inputEditElement = document.createElement('input-edit');
    inputEditElement.classList.add('input-edit', 'hide');

    const inputTitleElement = document.createElement('input');
    inputTitleElement.type = "text";
    inputTitleElement.value = this.productName;

    const btnSave = document.createElement('a');
    btnSave.innerHTML = '<i class="fas fa-save"></i>';
    btnSave.classList.add('btn-save');
    btnSave.addEventListener('click', (e) => {
      const newValue = inputTitleElement.value;
      if(this.editedCallback) this.editedCallback(this.id, newValue);
      subtitleElement.innerHTML = newValue;
      subtitleElement.classList.remove('hide');
      inputEditElement.classList.add('hide');
      btnEdit.dataset.editing = 'false';
      btnEdit.innerHTML = "Bewerk";
    });

    inputEditElement.appendChild(inputTitleElement);
    inputEditElement.appendChild(btnSave);
    articleContent.appendChild(inputEditElement);

    // Description
    const descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = this.productDescription;
    articleContent.appendChild(descriptionElement);

    // Creates the inner article
    const innerArticle = document.createElement('div');
    innerArticle.classList.add('inner-article');
    innerArticle.appendChild(articleHead);
    innerArticle.appendChild(articleContent);

    // add inner article
    this.articleElement.appendChild(innerArticle);

    // return the card
    return this.articleElement;
  }
}

export { createRandomProductCardData, ProductCard };