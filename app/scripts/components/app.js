'use strict';

frame.define([
  './scripts/components/MenuBar.js',
]).then(([MenuBar]) => {
  this.App = (props) => {
    const menuBar = MenuBar(props);
    return `
      <div class="app">
        <h1>${props.title}</h1>
        ${menuBar}
      </div>
    `;
  };

  return this.App;
});
