import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import approx from 'approximate-number';

import LikeDislike, { TYPE } from '../../../../common/LikeDislike';
import Button from '../../../../common/Button';

import { STATICS } from '../../STATICS';
import { commaSeperatedNumber } from '../../../../../utils';


import styles from './index.scss';

function VideoInfo({ data, channelInfo, inProgress }) {
  if (inProgress) {
    return (<div>Loading...</div>);
  }
  const { snippet, statistics } = data.items[0];
  const { snippet: channelSnippet, statistics: channelStatistics } = channelInfo.items[0];
  const { description, publishedAt, tags, title } = snippet;
  const { dislikeCount, likeCount, viewCount } = statistics;
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.stats}>
          <p className={styles.viewCount}>{`${commaSeperatedNumber(viewCount)} ${STATICS.VIEWS}`}</p>
          <p className={styles.uploadDate}>{moment(publishedAt).format('LL')}</p>
        </div>
        <div>
          <div className={styles.likeDislike}>
            <LikeDislike type={TYPE.LIKE} count={likeCount} />
            <LikeDislike type={TYPE.DISLIKE} count={dislikeCount} />
          </div>
        </div>
      </div>

      <div className={styles.description}>
        {description}
      </div>

      <div className={styles.channelInfoContainer}>
        <div className={styles.channelInfo}>
          <figure className={styles.userImage}>
            <img src={channelSnippet.thumbnails.default.url} alt={channelSnippet.title} />
          </figure>

          <div className={styles.userInfo}>
            <p className={styles.userTitle}>{channelSnippet.title}</p>
            <p className={styles.location}>{channelSnippet.country}</p>
          </div>

          <p className={styles.subs}>
            <span className={styles.subsCount}>{approx(channelStatistics.subscriberCount)}</span>
            {STATICS.SUBS}
          </p>
        </div>
        <div>
          <Button className={styles.btn}>{STATICS.SUBSCRIBE}</Button>
        </div>
      </div>
    </div>
  );
}

VideoInfo.propTypes = {
  data: PropTypes.object.isRequired,
  channelInfo: PropTypes.object.isRequired,
  inProgress: PropTypes.bool.isRequired,
};

export default VideoInfo;
