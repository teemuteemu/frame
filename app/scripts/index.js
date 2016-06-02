'use strict';

((frame) => {
  frame.define([
    './scripts/components/App.js',
    './scripts/content.js'
  ]).then(([App, content]) => {
    const renderApp = (route) => {
      const appPlaceholder = document.querySelector('.app');
      const routerProps = {
        router: {
          route
        }
      };
      const appProps = Object.assign({}, content, routerProps);
      const app = App(appProps);

      frame.render(appPlaceholder, App, appProps);
    };

    frame.router.addRouteListener(renderApp);
  });
})(window.frame);
