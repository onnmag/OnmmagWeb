
const mediaQuery = (breakPoint) => {
  const mq = window.matchMedia(`(max-width: ${breakPoint}px)`);
  return mq.matches;
};

const setDataTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
};

const setSelectedTheme = (theme) => {
  localStorage.setItem('data-theme', theme);
  setDataTheme(theme);
};

const getActiveTheme = () => localStorage.getItem('data-theme');

const BREAKPOINTS = {
  SMALL_SCREEN: 1400,
  PHONE: 600,
};

export {
  mediaQuery,
  BREAKPOINTS,
  setSelectedTheme,
  getActiveTheme,
};
