'use strict';

window.frame = ((frame) => {
  frame.router = {
    onRouteChange: null
  };

  let routes = {};

  /*
  frame.router.defineRoutes = (newRoutes) => {
    routes = newRoutes;

    window.addEventListener('hashchange', onHashChange);
    onHashChange();
  };
  */

  const getRoute = () => window.location.hash.slice(1);

  const onHashChange = () => {
    if (frame.router.onRouteChange) {
      frame.router.onRouteChange(getRoute());
    }
  };

  frame.router.addRouteListener = (callback) => {
    frame.router.onRouteChange = callback;
    frame.router.onRouteChange(getRoute());

    window.addEventListener('hashchange', onHashChange);
  };

  return frame;
})(window.frame);
