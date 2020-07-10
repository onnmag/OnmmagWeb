import React from 'react';
import PropTypes from 'prop-types';
import approx from 'approximate-number';

import { STATICS } from '../../Enums';
import styles from './index.scss';

function Cover({ data }) {
  const getStyles = () => ({
    backgroundImage: `url(${data.cover})`,
  });
  return (
    <div className={styles.coverContainer}>
      <div
        className={styles.coverPhoto}
        style={getStyles()}
      />
      <div className={styles.descriptionContainer}>
        <div className={styles.profileInfo}>
          <h1 className={styles.name}>{data.name}</h1>
          <div className={styles.profileDetails}>
            <span className={styles.postsCount}>{`${approx(data.posts)} ${STATICS.POSTS}`}</span>
            <span className={styles.subCount}>{`${approx(data.subscribers)} ${STATICS.SUBSCRIBERS}`}</span>
          </div>

          <section className={styles.info}>
            <p>{data.info}</p>
          </section>

          <section className={styles.personalInfoContainer}>
            <div className={styles.personalInfo}>
              <h4>{STATICS.BORN}</h4>
              <span>{data.dob}</span>
            </div>

            <div className={styles.personalInfo}>
             <h4>{STATICS.NATIONALITY}</h4>
              <span>{data.nationality}</span>
            </div>

            <div className={styles.personalInfo}>
              <h4>{STATICS.OCCUPATION}</h4>
              <span>{data.occupation}</span>
            </div>

            <div className={styles.personalInfo}>
              <h4>{STATICS.HEIGHT}</h4>
              <span>{data.height}</span>
            </div>

            <div className={styles.personalInfo}>
              <h4>{STATICS.AGE}</h4>
              <span>{data.age}</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

Cover.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Cover;
