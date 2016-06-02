'use strict';

frame.define([
  './scripts/components/MenuBar.js',
  './scripts/content.js'
]).then(([MenuBar, contentData]) => {
  this.App = (props) => {
    const menuProps = Object.assign({}, contentData, {currentRoute: props.router.currentRoute});
    const menuBar = MenuBar(menuProps);

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
