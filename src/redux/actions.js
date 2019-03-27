import {CHANGE_THEME, CHANGE_PHOTO_SIZE} from './actionsConstants';

export const changeTheme = (theme) => {
  return { 
    type: CHANGE_THEME,
    payload: theme
  };
};

export const changePhotoSize = (size) => {
  return { 
    type: CHANGE_PHOTO_SIZE,
    payload: size
  };
};