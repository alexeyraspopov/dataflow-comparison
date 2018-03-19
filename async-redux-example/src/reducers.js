import { combineReducers } from 'redux';
import { Map } from 'immutable';
import { RECEIVE_STARGAZERS } from './actions';

function stargazersByRepository(state = Map(), action) {
  switch (action.type) {
    case RECEIVE_STARGAZERS:
      return state.set(action.repository, action.stargazers);
    default:
      return state;
  }
}

let rootReducer = combineReducers({
  stargazersByRepository,
});

export default rootReducer;
