import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class GithubRepos extends PureComponent {
  static propTypes = {
    getReposList: PropTypes.func.isRequired,
    repos: PropTypes.arrayOf(PropTypes.string.isRequired),
  }

  static defaultProps = {
    repos: [],
  }

  state = {
    name: '',
    searchKey: '',
  }

  renderRepoList = () => (
    <ul>
      {this.props.repos.map(repo => <li>{`${repo}`}</li>)}
    </ul>
  )

  render() {
    return (
      <div style={{ justifyContent: 'center' }}>
        <div>
          <input type="text" placeholder="Github Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
          <button onClick={() => this.props.getReposList(this.state.name)}>GO</button>
          <button onClick={() => this.setState({ name: '' })}>Clear</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter keywords to filter. Eg.:algo"
            value={this.state.searchKey}
            onChange={e => this.setState({ searchKey: e.target.value })}
          />
          <button onClick={() => this.setState({ searchKey: '' })}>Clear</button>
        </div>
        {this.props.repos.length > 0 && this.renderRepoList()}
      </div>
    );
  }
}

export default GithubRepos;
