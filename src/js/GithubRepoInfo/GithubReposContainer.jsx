import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { RepoActions } from './RepoActions';
import GithubRepos from './GithubRepos';

@connect(store => ({ repos: store.repoReducer.repos }))
class GithubReposContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    repos: PropTypes.arrayOf(PropTypes.string.isRequired),
  }

  static defaultProps = {
    repos: [],
  }

  fetchReposInfoForUser = async (user) => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}/repos`, {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      });
      if (response.status === 200) {
        const result = await response.json();
        const repoNames = result.map(repo => repo.name);
        this.props.dispatch(RepoActions.updateRepoList(repoNames));
      } else {
        throw new Error(JSON.stringify(response));
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return <GithubRepos repos={this.props.repos} getReposList={user => this.fetchReposInfoForUser(user)} />;
  }
}

export default GithubReposContainer;
