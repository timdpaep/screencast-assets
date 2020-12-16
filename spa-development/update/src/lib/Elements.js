/**
 * A wrapper to create elements
 */

const Elements = {
  createButton({ textContent = '', onClick = null }) {
    const button = document.createElement('button');
    button.textContent = textContent;
    if (onClick) {
      button.addEventListener('click', () => { onClick(); });
    }
    return button;
  },

  createContainer({
    id = '', className = '', children = [], innerHTML = '',
  }) {
    const componentContainer = document.createElement('div');
    if (id) componentContainer.setAttribute('id', id);
    componentContainer.className = className;
    componentContainer.innerHTML = innerHTML;
    if (children.length) {
      children.forEach((child) => {
        if (child instanceof Element) {
          componentContainer.appendChild(child);
        }
      });
    }
    return componentContainer;
  },

  createHeader({ size = 1, textContent = '', className = '' }) {
    if (size < 0 || size > 6) return null;
    const header = document.createElement(`h${size}`);
    header.textContent = textContent;
    header.className = className;
    return header;
  },

  createLink({ href, textContent = '', target = '_self' }) {
    const a = document.createElement('a');
    a.href = href;
    a.target = target;
    a.textContent = textContent;
    return a;
  },

  createList({ items = [], ordered = false }) {
    const list = document.createElement(ordered ? 'ol' : 'ul');
    items.forEach(({ textContent, href, onClick }) => {
      const li = document.createElement('li');
      if (!href && !onClick) {
        li.textContent = textContent;
      } else if (href) {
        li.appendChild(Elements.createLink({
          textContent,
          href,
        }));
      } else {
        li.appendChild(Elements.createButton({
          textContent,
          onClick,
        }));
      }
      list.appendChild(li);
    });
    return list;
  },

  createParagraph({ textContent = '' }) {
    const p = document.createElement('p');
    p.textContent = textContent;
    return p;
  },
};

export default Elements;
