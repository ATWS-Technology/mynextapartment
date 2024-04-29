export const SWITCH_THEME = 'SWITCH_THEME';

export const switchTheme = (theme: string) => {
  return ({dispatch}: any) => {
    dispatch({
      type: SWITCH_THEME,
      payload: theme,
    });
  };
};
