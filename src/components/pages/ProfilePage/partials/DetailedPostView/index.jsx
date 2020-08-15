import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ActivePost from './partials/ActivePost';

import { MOCK } from '../../../../../mocks';
import { setCarouselData } from './utils';

import styles from './index.scss';

function DetailedPostView({ id, userInfo }) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    // TODO: **API** TEMP LOGIC need to REPLACE with actual API
    MOCK()
      .then(response => {
        if (id) {
          setData(setCarouselData(response.posts, id));
        }
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  }, [id]);
  if (isLoading) {
    return (
      <div>
        loading...
      </div>
    );
  }
  if (hasError) {
    return (
      <div>
        Error...
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <ActivePost data={data.activePost} userInfo={userInfo} />
    </div>
  );
}

DetailedPostView.propTypes = {
  id: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired,
};

export default DetailedPostView;

