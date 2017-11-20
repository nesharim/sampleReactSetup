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

  filterTerm = (term) => {
    const updatedRepoList = this.props.repos.filter(repo => repo.toLowerCase().search(term.toLowerCase()) !== -1);
    console.log(updatedRepoList);
    this.props.dispatch(RepoActions.updateRepoList(updatedRepoList));
  }

  render() {
    return (
      <GithubRepos
        repos={this.props.repos}
        getReposList={user => this.fetchReposInfoForUser(user)}
        filterForSearchTerm={term => this.filterTerm(term)}
      />
    );
  }
}

export default GithubReposContainer;
