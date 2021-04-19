import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import styles from './index.scss';

function VideoPlayer({ id }) {
  const containerRef = useRef(null);
  const calculateAspectRation = useCallback(() => {
    const { current } = containerRef;
    const { width } = current.getBoundingClientRect();
    current.style.height = `${Math.round((width / 16) * 9)}px`;
  }, []);

  useEffect(() => {
    // set init height
    calculateAspectRation();
  }, [calculateAspectRation]);

  useEffect(() => {
    window.addEventListener('resize', calculateAspectRation);
    return () => window.removeEventListener('resize', calculateAspectRation);
  }, [calculateAspectRation]);

  return (
    <div className={styles.container} ref={containerRef}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        width="100%"
        height="100%"
        controls={false}
      />
    </div>
  );
}

VideoPlayer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default VideoPlayer;
