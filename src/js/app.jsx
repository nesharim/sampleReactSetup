import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './Store';

import GithubReposContainer from './GithubRepoInfo/GithubReposContainer';
import '../css/style.css';

render(<Provider store={store}><GithubReposContainer /></Provider>, document.getElementById('app'));
