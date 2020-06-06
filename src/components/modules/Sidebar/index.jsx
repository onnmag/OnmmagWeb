import React, { useState, useRef } from 'react';

import { handleCloseAnimation } from '@utils/animations';

import HamburgerMenu from './partials/HamburgerMenu';
import Menu from './partials/Menu';
import styles from './index.scss';

function SideBar() {
  const [isOpen, handleIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuState = (modalState) => {
    if (modalState) {
      handleIsOpen(true);
    } else {
      handleCloseAnimation({
        animationClass: styles.slideOut,
        ref: menuRef,
        callBack: () => handleIsOpen(false),
      });
    }
  };

  return (
    <div>
      <HamburgerMenu handleIsOpen={handleMenuState} isOpen={isOpen} />
      {
        isOpen && (
          <div className={styles.container} ref={menuRef}>
            <Menu isOpen={isOpen} />
          </div>
        )
      }
    </div>
  );
}

export default SideBar;
