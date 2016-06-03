'use strict';

((frame) => {
  frame.define([
    './scripts/components/App.js',
    './scripts/content.js',
    './scripts/pages/Me.js',
    './scripts/pages/Projects.js',
    './scripts/pages/Contact.js'
  ]).then(([App, content, MePage, ProjectsPage, ContactPage]) => {
    const appPlaceholder = document.querySelector('.app');
    const routes = {
      '/': {
        component: App,
        routes: {
          '404': () => `<p>Not found :(</p>`,
          'default': 'me',
          'me': {
            component: MePage
          },
          'projects': {
            component: ProjectsPage,
            routes: {
              'id': {
                component: ProjectsPage
              }
            }
          },
          'contact': {
            component: ContactPage
          }
        }
      }
    };

    frame.router.app(routes, appPlaceholder);
  });
})(window.frame);
