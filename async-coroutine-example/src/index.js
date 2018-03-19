import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './Context';
import StargazerList from './StargazerList';
import { IdentityMap } from 'async-structure';

let cache = new IdentityMap();
let repository = 'alexeyraspopov/react-coroutine';

ReactDOM.render(
  <Provider value={cache}>
    <StargazerList repository={repository} />
  </Provider>,
  document.querySelector('main')
);
