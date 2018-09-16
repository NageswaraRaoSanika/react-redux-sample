import * as actions from './actions';

export function loadBlog() {
  return dispatch =>
    dispatch(actions.loadBlogSuccess({name: "nagesh"}))
}