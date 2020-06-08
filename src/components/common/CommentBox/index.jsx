import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

function CommentBox({ id }) {
  return (
    <label htmlFor={`user_${id}_comment_box`} className={styles.label}>
      <input type="text" id={`user_${id}_comment_box`} className={styles.inputBox} placeholder="Add a comment..."/>
    </label>
  );
}

CommentBox.propTypes = {
  id: PropTypes.string.isRequired,
};


export default CommentBox;
