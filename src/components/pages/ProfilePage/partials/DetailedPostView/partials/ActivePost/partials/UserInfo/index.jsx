import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon, { ICON_NAME } from '../../../../../../../../common/Icon';
import SubscriptionStatus from '../../../../../../../../common/SubscriptionStatus';
import MoreVertical from '../../../../../../../../common/MoreVertical';
// TODO: REPLACE OPTIOSN WITH ACTUAL OPTIONS
import Options from '../../../../../../../../common/PostCard/partials/Options';

import { SUBSCRIPTION_STATUS } from '../../../../../../../../../Enums/STATICS';


import styles from './index.scss';

function UserInfo({
    data: {
      profilePicture,
      profileId,
      name,
      isSubscribed,
      isVerified,
      isLiked,
    },
}) {
  const [liked, setLikedStatus] = useState(isLiked);
  const toggleLikeStatus = () => {
    setLikedStatus(prevState => !prevState);
  };
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <figure className={styles.image}>
          <img src={profilePicture} alt={profileId} />
        </figure>
        <span className={styles.name}>{name}</span>
        {isVerified && (
          <Icon className={styles.verifiedIcon} name={ICON_NAME.VERIFIED} size={3} />
        )}
        <SubscriptionStatus
          onClick={() => {}}
          status={isSubscribed ? SUBSCRIPTION_STATUS.SUBSCRIBED : SUBSCRIPTION_STATUS.SUBSCRIBE}
        />
      </div>
      <div className={styles.controls}>
        <Icon
          onClick={toggleLikeStatus}
          name={ICON_NAME.LIKE}
          className={cx(styles.icon, {
            [styles.liked]: liked,
            [styles.notLiked]: !liked,
          })}
        />
        <MoreVertical>
          <Options />
        </MoreVertical>
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  data: PropTypes.object.isRequired,
  profilePicture: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isSubscribed: PropTypes.string.isRequired,
  isVerified: PropTypes.string.isRequired,
};

export default UserInfo;
