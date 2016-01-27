import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { createHistory } from 'history';
import routes from './app/routes';

let handleCreateElement = (Component, props) => {
  if(Component.hasOwnProperty('requestInitialData')){
    let initialData = document.getElementById('initial-data').textContent;
    if (typeof initialData == "object") {
      initialData = JSON.parse(initialData);
    }
    return <Component initialData={initialData} {...props} />;
  } else {
    console.log('llega', Component)
    return <Component {...props} />;
  }
}

render((
  <Router history={createHistory()} createElement={handleCreateElement}>
    {routes}
  </Router>
), document.getElementById('root'))