'use strict';

window.frame = ((frame) => {
  frame.router = {};
  let element;

  const getRoute = () => {
    const routeStruct = window.location.hash.replace('#', '').split('/');
    if (routeStruct[0] === '') {
      routeStruct[0] = '/';
    } else {
      routeStruct.unshift('/');
    }
    return routeStruct;
  };
  
  const getRouteComponents = (fragments) => {
    let parentComponent = frame.router.routes[fragments[0]];
    fragments.shift();

    if (fragments.length === 0) {
      fragments.push(parentComponent.routes.default);
    }

    return [parentComponent.component].concat(fragments.map((frag) => {
      let thisRoute = parentComponent.routes[frag];

      if (thisRoute && thisRoute.routes) {
        parentComponent = parentComponent.routes;
      }
      if (!thisRoute) {
        thisRoute = {
          component: parentComponent.routes['404']
        };
      }
      return thisRoute.component;
    }));
  };

  const onHashChange = () => {
    const fragments = getRoute();

    const components = getRouteComponents(fragments);
    const HTMLstring = components.reduceRight((props, curr) => {
      if (curr) {
        props.children = curr(props);
      }
      return props;
    }, {}).children;

    frame.renderString(element, HTMLstring);
  };

  frame.router.defineRoutes = (newRoutes, newElement) => {
    frame.router.routes = newRoutes;
    element = newElement;

    window.addEventListener('hashchange', onHashChange);
    onHashChange();
  };

  return frame;
})(window.frame);
