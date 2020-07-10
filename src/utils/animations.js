
const handleCloseAnimation = ({ animationClass, callBack, ref }) => {
  const ele = ref.current;
  ele.classList.add(animationClass);
  ele.addEventListener('animationend', () => {
    callBack();
  });
};

export {
  handleCloseAnimation,
};

