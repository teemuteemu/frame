'use strict';

(function (frame) {
  frame.define([
    './scripts/components/App.js',
    './scripts/content.js'
  ]).then(([App, content]) => {
    const appPlaceholder = document.getElementById('app');
    frame.render(appPlaceholder, App, content);
  });
}(window.frame));
