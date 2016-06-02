'use strict';

this.Content = ({content}) => {
  const foo = content.me;

  return `
    <div class="content">
      <h1>${foo.title}</h1>
      <p>${foo.content}</P>
    </div>
  `;
};
