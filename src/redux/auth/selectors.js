export const selectIsLoggedIn = (state) => state.auth && state.auth.isLoggedIn;

export const selectUser = (state) => state.auth && state.auth.user;

export const selectIsRefreshing = (state) =>
  state.auth && state.auth.isRefreshing;
