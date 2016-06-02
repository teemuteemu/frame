'use strict';

window.frame = ((frame) => {
  frame.router = {};

  let routes = {};

  frame.router.defineRoutes = (newRoutes) => {
    routes = newRoutes;

    window.addEventListener('hashchange', onHashChange);
    onHashChange();
  };

  const onHashChange = () => {
    const state = window.location.hash.slice(1);
    const stateComponent = routes[state];

    if (stateComponent) {
      stateComponent();
    } else {
      console.log('404');
    }
  };

  return frame;
})(window.frame);
