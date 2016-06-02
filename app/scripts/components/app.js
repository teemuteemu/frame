'use strict';

frame.define([
  './scripts/components/MenuBar.js',
  './scripts/components/Content.js',
  './scripts/content.js'
]).then(([MenuBar, PageContent, contentData]) => {
  this.App = (props) => {
    const menuProps = Object.assign({}, contentData, {currentRoute: props.router.currentRoute});
    const menuBar = MenuBar(menuProps);

    const contentProps = Object.assign({}, contentData, {children: props.children});
    const pageContent = PageContent(contentProps);

    return `
      <div class="app">
        ${menuBar}

        <div class="content">
          <h1>${contentData.title}</h1>
          ${pageContent}
        </div>
      </div>
    `;
  };

  return this.App;
});
