import { TOGGLE_THEME } from '../actions/themeActions';

const initialState = {
  theme: 'light', // default theme
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

export default themeReducer;
