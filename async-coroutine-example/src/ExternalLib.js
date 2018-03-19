import React from 'react';
import createContext from 'create-react-context';

export class Resource {
  constructor(loader) {
    this.loader = loader;
  }

  read(cache, key) {
    return cache.read(this, key, this.loader);
  }
}

export class Cache {
  constructor() {
    this.cache = new Map();
  }

  read(resource, key, loadMissing) {
    if (!this.cache.has(resource)) {
      this.cache.set(resource, new Map());
    }

    let resourceCache = this.cache.get(resource);

    if (resourceCache.has(key)) {
      return resourceCache.get(key);
    }

    let promise = loadMissing(key).then(result => {
      resourceCache.set(key, result);
      return result;
    });

    resourceCache.set(key, promise);

    return promise;
  }
}

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
