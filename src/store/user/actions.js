/**
* Blog Actions
*/
import * as types from './types'
export function loadBlogSuccess(data) {
  return { type: types.LOAD, data}
}
