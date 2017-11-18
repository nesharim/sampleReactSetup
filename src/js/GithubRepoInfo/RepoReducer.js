import { RepoActionTypes } from './RepoActions';

const initialState = {
  repos: [],
};

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case RepoActionTypes.ADD_REPOS:
      return {
        ...state,
        repos: action.payload,
      };

    default: return state;
  }
};

export default repoReducer;
