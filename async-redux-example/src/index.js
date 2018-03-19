import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import StargazerList from './StargazerList';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

let store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));
let repository = 'alexeyraspopov/react-coroutine';

ReactDOM.render(
  <Provider store={store}>
    <StargazerList repository={repository} />
  </Provider>,
  document.querySelector('main')
);
