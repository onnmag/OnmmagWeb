import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './index.scss';

function CommentBox({ id, className }) {
  return (
    <label
      htmlFor={`user_${id}_comment_box`}
      className={cx(styles.label, {
        [className]: className,
      })}
    >
      <input type="text" id={`user_${id}_comment_box`} className={styles.inputBox} placeholder="Add a comment..." />
    </label>
  );
}

CommentBox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CommentBox.defaultProps = {
  className: '',
};


export default CommentBox;
