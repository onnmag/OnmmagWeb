import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

function Modal({ children, isOpen, handleModalState }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 27) {
        handleModalState(false);
      }
    };
    window.document.addEventListener('keydown', handleKeyDown);
    return () => window.document.removeEventListener('keydown', handleKeyDown);
  }, [handleModalState]);
  if (isOpen) {
    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
  return null;
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  handleModalState: PropTypes.func,
};

Modal.defaultProps = {
  isOpen: false,
  handleModalState: () => {},
};

export default Modal;

