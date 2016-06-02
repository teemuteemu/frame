'use strict';

this.MenuBarItem = (props) => {
  return `
    <li>
      <a href=${props.href}>${props.title}</a>
    </li>
  `;
};

this.MenuBar = (props) => {
  const menuItems = props.menu.map((menuItem) => this.MenuBarItem(menuItem)).join(' ');
  return `
    <div class="menubar">
      <ul>
        ${menuItems}
      </ul>
    </div>
  `;
};
