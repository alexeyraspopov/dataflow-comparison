import React from 'react';
import createContext from 'create-react-context';

let { Provider, Consumer } = createContext();

export { Provider };

export function useContext(Component, propName) {
  return function ContextWrapper(props) {
    return (
      <Consumer>
        {value => <Component {...{ ...props, [propName]: value }} />}
      </Consumer>
    );
  };
}
