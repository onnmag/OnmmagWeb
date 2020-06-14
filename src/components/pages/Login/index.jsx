import React from 'react';

import Header from '../../modules/Login/Header';
import Footer from '../../modules/Login/Footer';
import Main from '../../modules/Login/Main';

import styles from './index.scss';

function LoginLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default LoginLayout;
