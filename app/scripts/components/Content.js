'use strict';

this.Content = ({content}) => {
  return `
    <div class="content">
      <h2>${content.title}</h2>
      <p>${content.content}</P>
    </div>
  `;
};
