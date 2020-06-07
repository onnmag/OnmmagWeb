import React, { useState, useRef } from 'react';

import HamburgerMenu from './partials/HamburgerMenu';
import Menu from './partials/Menu';
import styles from './index.scss';

function SideBar() {
  const [isOpen, handleIsOpen] = useState(false);

  const handleMenuState = (modalState) => {
    handleIsOpen(modalState);
  };

  return (
    <div className={styles.container}>
      <HamburgerMenu handleIsOpen={handleMenuState} isOpen={isOpen} />
      {
        isOpen && (
          <div className={styles.menuContainer}>
            <Menu isOpen={isOpen} />
          </div>
        )
      }
    </div>
  );
}

export default SideBar;
