import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Cache } from './ExternalLib';
import StargazerList from './StargazerList';

let cache = new Cache();
let repository = 'alexeyraspopov/react-coroutine';

ReactDOM.render(
  <Provider value={cache}>
    <StargazerList repository={repository} />
  </Provider>,
  document.querySelector('main')
);
