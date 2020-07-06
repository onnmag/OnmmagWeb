import React from 'react';
import PropTypes from 'prop-types';

import UserInfo from './partials/UserInfo';
import LatestPost from './partials/LatestPost';


import styles from './index.scss';

function Wall({ data, isVerified, name }) {
  return (
    <div className={styles.container}>
      <section className={styles.postWrapper}>
        <UserInfo isVerified={isVerified} name={name} data={data} />
      </section>
      <section className={styles.postContainer}>
        {data.posts.map(post => (
          <LatestPost data={post} />
        ))}
      </section>
    </div>
  );
}

Wall.propTypes = {
  data: PropTypes.object.isRequired,
  isVerified: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Wall;
