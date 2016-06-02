'use strict';

((frame) => {
  frame.define([
    './scripts/components/App.js',
    './scripts/content.js'
  ]).then(([App, content]) => {

    const renderApp = (route) => {
      const appPlaceholder = document.querySelector('.app');

      const routeContent = content.content[route];
      const selectedContent = {
        content: routeContent
      };
      const appProps = Object.assign({}, content, selectedContent);

      frame.render(appPlaceholder, App, appProps);
    };

    frame.router.defineRoutes({
      '': () => {
        renderApp('me');
      },
      'projects': () => {
        renderApp('projects');
      },
      'contact': () => {
        renderApp('contact');
      }
    });
  });
})(window.frame);
