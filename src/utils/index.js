
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

const getQueryParams = () => {
  const params = new URLSearchParams(window.location.href.split('?').pop());
  const paramObj = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const value of params.keys()) {
    paramObj[value] = params.get(value);
  }
  return paramObj;
};

const commaSeperatedNumber = (number) => {
  const nfObject = new Intl.NumberFormat('en-US');
  return nfObject.format(number);
};

const BREAKPOINTS = {
  SMALL_SCREEN: 1400,
  PHONE: 600,
};

export {
  mediaQuery,
  BREAKPOINTS,
  setSelectedTheme,
  getActiveTheme,
  getQueryParams,
  commaSeperatedNumber,
};
