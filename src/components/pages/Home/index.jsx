import React from 'react';

import Feeds from '../../modules/Feeds';
import TopStories from '../../modules/TopStories';

import styles from './index.scss';

function Home() {
  return (
    <div className={styles.container}>
      <TopStories />
       {/* <div className={styles.magazineContainer}> */}
       {/* <img src="https://magazineawards.files.wordpress.com/2014/05/14188.png" alt="magazine" className={styles.magazineCover} /> */}
       {/* <div className={styles.readmore}>{'Read ->'}</div> */}
       {/* </div> */}
      <Feeds />
    </div>
  );
}

export default Home;
