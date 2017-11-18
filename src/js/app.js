import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './Store';

import GithubReposContainer from './GithubRepoInfo/GithubReposContainer';
import '../css/style.css';

class App extends Component {
  render(){
    console.log(store.getState());
  }
}

render(<Provider store={store}><GithubReposContainer /></Provider>, document.getElementById('app'));
