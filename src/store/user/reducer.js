/**
* Blog Reducer
*/
import initialState from '../../store/initialState'
import * as types from './types'
export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOAD:
      return {
        ...state,
        user: action.data
      };

    default:
      return state
  }
}