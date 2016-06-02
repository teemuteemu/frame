'use strict';

this.MenuBarItem = ({href, title}) => {
  return `
    <li>
      <a href="#${href}">${title}</a>
    </li>
  `;
};

this.MenuBar = ({menu}) => {
  const menuItems = menu.map((menuItem) => this.MenuBarItem(menuItem)).join(' ');
  return `
    <div class="menubar">
      <ul>
        ${menuItems}
      </ul>
    </div>
  `;
};
