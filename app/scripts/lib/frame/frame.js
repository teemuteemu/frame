'use strict';

window.frame = ((frame) => {
  const evalInContext = (js, context) => {
    return function () { return eval(js); }.call({});
  };

  const loadScript = (url) => {
    var xmlhttp;
    if (window.XMLHttpRequest) {
      xmlhttp = new window.XMLHttpRequest();
    } else {
      try {
        xmlhttp = new window.ActiveXObject('Microsoft.XMLHTTP');
      } catch (e) {
        return;
      }
    }

    return new Promise((resolve, reject) => {
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          const response = xmlhttp.responseText;
          const component = evalInContext(response);
          resolve(component);
        }
      };
      xmlhttp.open('GET', url, true);
      xmlhttp.send();
    });
  };

  const loadScripts = (scripts) => {
    const allScriptsReady = scripts.map((script) => loadScript(script));
    return Promise.all(allScriptsReady);
  };

  /*
   * Public API
   */
  frame.define = (scripts) => {
    if (Array.isArray(scripts)) {
      return loadScripts(scripts);
    } else {
      return loadScript(scripts);
    }
  };

  frame.render = (domElement, Component, props) => {
    domElement.innerHTML = Component(props);
  };

  frame.renderString = (domElement, HTMLstring) => {
    domElement.innerHTML = HTMLstring;
  };

  return frame;
})({});
