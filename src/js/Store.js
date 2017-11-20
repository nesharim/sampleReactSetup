import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

import repoReducer from './GithubRepoInfo/RepoReducer';

const loggermiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

export default createStore(combineReducers({ repoReducer }), applyMiddleware(loggermiddleware));
