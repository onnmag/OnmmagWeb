import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { ROUTES_NAME, ROUTES_LINKS } from '../../pages/Main/Routes/Enums';

import styles from './index.scss';

const SIZE = {
  DEFAULT: 'default',
  HIGH: 'high',
  MAX_RES: 'maxres',
  MEDIUM: 'medium',
  STANDARD: 'standard',
};

function Card({ data, id, size }) {
  const history = useHistory();
  return (
    <div
      className={styles.container}
      onClick={() => history.push(`${ROUTES_LINKS[ROUTES_NAME.WATCH]}?id=${id}`)}
      style={{
        maxWidth: `${data.thumbnails[size].width}px`,
      }}
    >
      <figure className={styles.image}>
        <img src={data.thumbnails[size].url} alt={data.title} />
      </figure>
      <div>
        <h3 className={styles.title}>
          <a>{data.localized.title}</a>
        </h3>
       <div className={styles.details}>
         <p className={styles.channelTitle}>
           <a>{data.channelTitle}</a>
         </p>
         <span className={styles.fromNow}>
           {moment(data.publishedAt).fromNow()}
         </span>
       </div>
      </div>
    </div>
  );
}

export {
  Card as default,
  SIZE,
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Card.defaultProps = {
  size: SIZE.HIGH,
};
