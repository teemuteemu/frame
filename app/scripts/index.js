'use strict';

(function (frame) {
  frame.define([
    './scripts/components/app.js'
  ]).then(([App]) => {
    const appPlaceholder = document.getElementById('app');
    const appProps = {
      title: 'Dummy app',
      menu: [
        {
          title: 'Me',
          href: 'me'
        }, {
          title: 'Project',
          href: 'projects'
        }, {
          title: 'Contact',
          href: 'contact'
        }
      ]
    };

    frame.render(appPlaceholder, App, appProps);
  });
}(window.frame));
