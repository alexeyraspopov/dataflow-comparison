import { fetchStargazersByProject } from './api';

export const RECEIVE_STARGAZERS = 'RECEIVE_STARGAZERS';

function receiveStargazers(repository, stargazers) {
  return {
    type: RECEIVE_STARGAZERS,
    repository,
    stargazers,
  };
}

export function fetchStargazers(repository) {
  return async dispatch => {
    let stargazers = await fetchStargazersByProject(repository);
    return dispatch(receiveStargazers(repository, stargazers));
  };
}
