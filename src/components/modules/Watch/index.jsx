import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../../common/VideoPlayer';
import VideoList from './paritals/VideoList';
import VideoInfo from './paritals/VideoInfo';
import Comments from './paritals/Comments';

import styles from './index.scss';

function Watch({
   data: {
     comments,
     videoInfo,
     channelInfo,
     videosList,
   },
   inProgress: {
     commentsInProgress,
     recommendedVideoInProgress,
     inProgress,
   },
    setTokens,
  id,
 }) {
  return (
    <div className={styles.container}>
      <div className={styles.player}>
        <VideoPlayer id={id} />
        <div className={styles.details}>
          { (channelInfo && videoInfo) &&
            <VideoInfo
              data={videoInfo}
              channelInfo={channelInfo}
              inProgress={inProgress}
            />
          }
        </div>
      </div>
      <div className={styles.comments}>
        <Comments
          data={comments}
          inProgress={commentsInProgress}
          totalComments={videoInfo?.items[0]?.statistics?.commentCount}
          setPageToken={setTokens}

        />
      </div>
      <div className={styles.list}>
        <VideoList
          data={videosList}
          inProgress={recommendedVideoInProgress}
          setPageToken={setTokens}
        />
      </div>
    </div>
  );
}

Watch.propTypes = {
  data: PropTypes.shape({
    comments: PropTypes.object,
    videoInfo: PropTypes.object,
    channelInfo: PropTypes.object,
    videosList: PropTypes.object,
  }),
  inProgress: PropTypes.shape({
    commentsInProgress: PropTypes.bool.isRequired,
    inProgress: PropTypes.bool.isRequired,
    recommendedVideoInProgress: PropTypes.bool.isRequired,
  }).isRequired,
  setTokens: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

Watch.defaultProps = {
  data: {},
};

export default Watch;
