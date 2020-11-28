/**
 * A Handlebars Application
 */

import playlists from './playlists.js';

import { tplPlaylists } from './views/templates/index.js';
import { partHeader } from './views/partials/index.js';
import ClickEventDelegator from './lib/ClickEventDelegator.js';

/**
 * Partials
 */

const registerPartials = () => {
  // 1. Register header
  Handlebars.registerPartial('header', partHeader);
}

/**
 * Block Helpers
 */

const registerBlockHelper = () => {
  // 1. No Operations
  Handlebars.registerHelper("noop", (options) => console.log("Rendering", options.fn()));

  // 2. Making things bold
  Handlebars.registerHelper("bold", (options) => {
    return new Handlebars.SafeString(`<strong>${options.fn()}</strong>`);
  })

  // 3. IF
  Handlebars.registerHelper("newif", (context, options) => {
    if(context) {
      return options.fn();
    } else {
      return options.inverse(this);
    }
  });

  // 4. List
  Handlebars.registerHelper("list", (context, options) => {
    var attrs = Object.keys(options.hash)
      .map((key) => `${key}=${options.hash[key]}`)
      .join(" ");

    return (
      `<ul ${attrs}>
        ${context.map(
          (item) => `<li>${options.fn(item)}</li>`
        ).join("\n")}
      </ul>`
    );
  });
}

/**
 * Helpers
 */

const registerHelpers = () => {
  // 1. My First Helper
  Handlebars.registerHelper('scream', (text) => text.toUpperCase());

  // 2. Emphasize this
  Handlebars.registerHelper('em', (text) => {
    const escapedText = Handlebars.escapeExpression(text);
    return new Handlebars.SafeString(
      `<em>${escapedText}</em>`
    );
  });

  // 3. Multiple Parameters
  // 4. Subexpressions
  Handlebars.registerHelper('link', (text, url) => {
    const escapedText = Handlebars.escapeExpression(text),
          escpadeUrl = Handlebars.escapeExpression(url);

    return new Handlebars.SafeString(
      `<a href=${escpadeUrl}>${escapedText}</a>`
    );
  });
}

const initApp = () => {
  // register the HandleBars helpers
  registerHelpers();

  // register the HandleBars block helpers
  registerBlockHelper();

  // register the partials
  registerPartials();

  // set the click event delegator
  const clickEventDelegator = new ClickEventDelegator();
  clickEventDelegator.addCallbackFor(
    '.show-playlist',
    (event) => console.log("Rendering playlist with id: ", event.target.dataset.id)
  );

  const appContainer = document.getElementById('appContainer');

  // Simple Expressions
  // const template = Handlebars.compile("<h1>{{mytitle}}</h1>")
  // appContainer.innerHTML = template({ mytitle: "Hello Handlebars!" });

  // Getting a template
  const hbsPlaylists = Handlebars.compile(tplPlaylists)
  appContainer.innerHTML = hbsPlaylists({ playlists })
}

window.addEventListener('load', initApp);