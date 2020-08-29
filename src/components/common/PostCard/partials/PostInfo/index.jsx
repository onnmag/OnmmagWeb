import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useGetApi } from '../../../../../hooks/useApi';

import MoreVertical from '../../../MoreVertical';
import Options from '../Options';

import { ROUTES_LINKS } from '../../../../pages/Main/Routes/Enums';
import { getPost40 } from '../../../../modules/Feeds/FeedsApi';


import styles from './index.scss';

function PostInfo({ title, name }) {
  const [imageData, setImageData] = useState('');
  const { makeRequest, inProgress } = useGetApi();
  useEffect(() => {
    makeRequest(getPost40())
      .then(response => {
        setImageData(response);
      });
  }, [makeRequest]);
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.about}>
          {
            inProgress ?
              <span className={styles.loader} /> :
              <img src={imageData} alt={name} className={styles.image} />
          }
          <div className={styles.postInfo}>
            <Link to={`${ROUTES_LINKS.PROFILE}/ester_exposito`}>
              <span className={styles.name}>{name}</span>
            </Link>
            <span className={styles.location}>Spain</span>
          </div>
        </div>
        <div className={styles.title}>
          {title}
        </div>
      </div>
      <MoreVertical className={styles.moreInfo}>
        <Options />
      </MoreVertical>
    </div>
  );
}

PostInfo.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,

};

PostInfo.defaultProps = {
  title: '',
  name: '',
};

export default PostInfo;
