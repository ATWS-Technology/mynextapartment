import {LIGHTTHEME} from '../theme/theme';
import {SWITCH_THEME} from './themeActions';

const initialState = {
  theme: LIGHTTHEME,
};

export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
