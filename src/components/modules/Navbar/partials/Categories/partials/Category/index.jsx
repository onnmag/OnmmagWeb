import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '@common/Icon';

import styles from './index.scss';

  function Category({ icon, displayName, id, activeCategory, onClick }) {
  const nameRef = useRef(null);

  useEffect(() => {
    if (nameRef.current) {
      const { current } = nameRef;
      if (activeCategory === id) {
        current.style.width = '50px';
      } else {
        current.style.width = '0px';
      }
    }
  }, [activeCategory, id]);

  return (
    <div
      role="presentation"
      className={cx(styles.container, {
        [styles.activeCategory]: activeCategory === id,
        [styles[activeCategory]]: activeCategory === id,
      })}
      onClick={() => onClick(id)}
    >
      <Icon name={icon} />
      <span className={styles.displayName} ref={nameRef}>{displayName}</span>
    </div>
  );
}

Category.propTypes = {
  icon: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  activeCategory: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Category;
