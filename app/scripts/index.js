'use strict';

((frame) => {
  frame.define([
    './scripts/components/App.js',
    './scripts/content.js'
  ]).then(([App, content]) => {
    const appPlaceholder = document.querySelector('.app');
    const routes = {
      '/': {
        component: App,
        routes: {
          '404': () => `<p>Not found :(</p>`,
          'default': 'me',
          'me': {
            component: () => `<p>me me me</p>`
          },
          'projects': {
            component: () => `<p>projects</p>`
          },
          'contact': {
            component: () => `<p>contact</p>`
          }
        }
      }
    };

    frame.router.defineRoutes(routes, appPlaceholder);
  });
})(window.frame);
