import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Grid, Button, Input, Segment } from 'semantic-ui-react';

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
    <Segment.Group>
      {this.props.repos.map(repo => <Segment>{`${repo}`}</Segment>)}
    </Segment.Group>
  )

  render() {
    return (
      <div>
        <Grid centered columns={4}>
          <Grid.Row>
            <Grid.Column>
              <Input size="mini" type="text" placeholder="Github Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
              <Button color="green" onClick={() => this.props.getReposList(this.state.name)}>Go</Button>
              <Button onClick={() => this.setState({ name: '' })}>Clear</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Input
                size="mini"
                type="text"
                placeholder="Enter keywords to filter. Eg.:algo"
                value={this.state.searchKey}
                onChange={e => this.setState({ searchKey: e.target.value })}
              />
              <Button onClick={() => this.setState({ searchKey: '' })}>Clear</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {this.props.repos.length > 0 && this.renderRepoList()}
      </div>
    );
  }
}

export default GithubRepos;
