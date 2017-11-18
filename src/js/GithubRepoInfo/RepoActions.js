const RepoActionTypes = {
  ADD_REPOS: 'RepoActions/ADD_REPOS',
};

const RepoActions = {
  updateRepoList: payload => ({ type: RepoActionTypes.ADD_REPOS, payload }),
};

export { RepoActionTypes, RepoActions };
