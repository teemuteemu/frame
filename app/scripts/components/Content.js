'use strict';

this.NotFound = (props) => {
  return `
    <p>404</p>
  `;
};

this.Content = (props) => {
  const content = props.content[props.router.route];
  if (!content) {
    return this.NotFound(props);
  }

  return `
    <div class="content">
      <h2>${content.title}</h2>
      <p>${content.content}</P>
    </div>
  `;
};
