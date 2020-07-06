import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';
import Icon, { ICON_NAME } from '../../../../../../common/Icon';


function UserInfo({ data, name, isVerified }) {
  const ProfilePicture = () => (
    <figure className={styles.profilePicture}>
      <img src={data.profilePicture} alt={name} />
    </figure>
  );

  const UserDetails = () => (
    <div className={styles.userInfo}>
      <div>
        <span className={styles.userName}>{name}</span>
        {isVerified && (
          <Icon className={styles.verifiedIcon} name={ICON_NAME.VERIFIED} size={3} />
        )}
      </div>
      <p className={styles.location}>{data.activeLocation}</p>
    </div>
  );

  return (
    <section className={styles.contentContainer}>
      <div className={styles.userInfoContainer}>
        <div>
          <ProfilePicture />
          <UserDetails />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Subscribed</button>
        </div>
      </div>
      <div />
    </section>
  );
}

UserInfo.propTypes = {
  data: PropTypes.object.isRequired,
  isVerified: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};


export default UserInfo;
