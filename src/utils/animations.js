
const handleCloseAnimation = ({ animationClass, callBack, ref }) => {
  const ele = ref.current;
  ele.classList.add(animationClass);
  ele.addEventListener('animationend', () => {
    console.log('entered');
    callBack();
  });
};

export {
  handleCloseAnimation,
};

