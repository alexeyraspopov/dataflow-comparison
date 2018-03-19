import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStargazers } from './actions';

class StargazerListContainer extends Component {
  componentDidMount() {
    let { dispatch, stargazers, repository } = this.props;

    if (stargazers.length === 0) {
      dispatch(fetchStargazers(repository));
    }
  }

  render() {
    return <StargazerList stargazers={this.props.stargazers} />;
  }
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

export default connect((state, { repository }) => {
  let stargazers = getStargazersByRepository(state, repository);
  return { stargazers };
})(StargazerListContainer);

function getStargazersByRepository(state, repository) {
  return state.stargazersByRepository.get(repository, []);
}
