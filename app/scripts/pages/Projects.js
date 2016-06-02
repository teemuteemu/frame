this.ProjectItem = (props) => {
  return `
    <li>${props.title}</li>
  `;
};

this.Projects = (props) => {
  const projectElements = [
    {
      title: 'Foo'
    },
    {
      title: 'Bar'
    },
    {
      title: 'Baz'
    }
  ].map((project) => {
    return this.ProjectItem(project);
  }).join(' ');

  return `
    <p>some projects</p>
    <ul>
      ${projectElements}
    </ul>
  `;
};
