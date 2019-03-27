import {CHANGE_THEME, CHANGE_PHOTO_SIZE} from './actionsConstants';

const initialState = {
  theme: 'light',
  size: 'normal'
}

const reducer = (state = initialState, action = {}) => {
  if (action.type === CHANGE_PHOTO_SIZE) {
    return Object.assign({}, state, {size: action.payload});
  }

  if (action.type === CHANGE_THEME) {
    return Object.assign({}, state, {theme: action.payload});
  }

  return state;
}

export default reducer;