'use strict';

frame.define([
  './scripts/components/MenuBar.js',
  './scripts/components/Content.js'
]).then(([MenuBar, Content]) => {
  this.App = (props) => {
    const menuBar = MenuBar(props);
    const content = Content(props);

    return `
      <div class="app">
        <h1>${props.title}</h1>
        ${menuBar}
        ${content}
      </div>
    `;
  };

  return this.App;
});
