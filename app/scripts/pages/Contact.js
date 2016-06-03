this.Contact = (props) => {
  let input = 'foobar';

  const onChange = (evt) => {
    debugger
  };

  return `
    <div>
      <input type="text" value="${input}" onkeypress="${onChange}"></input>
      <p>${input}</p>
    </div>
  `;
};
