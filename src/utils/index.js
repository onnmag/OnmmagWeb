
const mediaQuery = (breakPoint) => {
  const mq = window.matchMedia(`(max-width: ${breakPoint}px)`);
  return mq.matches;
};

const BREAKPOINTS = {
  SMALL_SCREEN: 1400,
};

export {
  mediaQuery,
  BREAKPOINTS,
};
