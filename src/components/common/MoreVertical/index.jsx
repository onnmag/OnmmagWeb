import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon, { ICON_NAME } from '../Icon';

import styles from './index.scss';

function MoreVertical({ className, children }) {
  const [isOpen, handleMenuState] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    console.log('entered');
    handleMenuState(prevState => !prevState);
  };

  const handleMenuClose = () => {
    handleMenuState(false);
  };

  useEffect(() => {
    const onClickListener = (e) => {
      if (!(menuRef.current.contains(e.target))) {
        handleMenuClose();
      }
    };
    const onKeyDownListener = (e) => {
      if (e.keyCode === 27) {
        handleMenuClose();
      }
    };
    window.document.addEventListener('click', onClickListener, true);
    window.document.addEventListener('keydown', onKeyDownListener);
    return () => {
      window.document.removeEventListener('click', onClickListener, true);
      window.document.removeEventListener('keydown', onKeyDownListener);
    };
  }, []);

  return (
    <div
      className={cx(styles.container, {
      [className]: className,
    })}
      ref={menuRef}
    >
      <Icon
        name={ICON_NAME.MORE_VERT}
        size={4}
        onClick={toggleMenu}
      />
      <div>
        {
          isOpen && (
            <div className={styles.content} >
              {children}
            </div>
          )
        }
      </div>
    </div>
  );
}

MoreVertical.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

MoreVertical.defaultProps = {
  className: '',
};

export default MoreVertical;
