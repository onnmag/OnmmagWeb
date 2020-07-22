
const mediaQuery = (breakPoint) => {
  const mq = window.matchMedia(`(max-width: ${breakPoint}px)`);
  return mq.matches;
};

export {
  mediaQuery,
};
