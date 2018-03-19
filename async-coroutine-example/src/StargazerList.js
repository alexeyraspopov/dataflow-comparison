import React from 'react';
import Coroutine from 'react-coroutine';
import { useContext } from './ExternalLib';
import stargazersByRepository from './StargazersResource';

export default useContext(Coroutine.create(StargazerListContainer), 'cache');

function* StargazerListContainer({ cache, repository }) {
  let stargazers = yield stargazersByRepository.read(cache, repository);
  return <StargazerList stargazers={stargazers} />;
}

function StargazerList({ stargazers }) {
  return (
    <ul>
      {stargazers.map(stargazer => (
        <li key={stargazer.login}>
          <a href={stargazer.html_url}>{stargazer.login}</a>
        </li>
      ))}
    </ul>
  );
}
