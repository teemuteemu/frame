'use strict';

frame.define([
  './scripts/components/MenuBar.js',
  './scripts/content.js'
]).then(([MenuBar, contentData]) => {
  this.App = (props) => {
    const menuBar = MenuBar(contentData);

    return `
      <div class="app">
        ${menuBar}
        <div class="content">
          <h1>${contentData.title}</h1>
          ${props.children}
        </div>
      </div>
    `;
  };

  return this.App;
});
