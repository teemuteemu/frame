'use strict';

this.MenuBarItem = ({href, title, active}) => {
  const activeClass = active
    ? 'active'
    : '';

  return `
    <li>
      <a href="#${href}" class="menubar-item ${activeClass}">${title}</a>
    </li>
  `;
};

this.MenuBar = ({menu, currentRoute}) => {
  const menuItems = menu.map((menuItem) => {
    menuItem.active = (menuItem.href === currentRoute);
    return this.MenuBarItem(menuItem);
  }).join(' ');

  return `
    <div class="menubar">
      <ul>
        ${menuItems}
      </ul>
    </div>
  `;
};
