import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './index.scss';

function CommentBox({ id, className, onChange, value }) {
  return (
      <textarea
        id={`user_${id}_comment_box`}
        className={cx(styles.textArea, {
          [className]: className,
        })}
        placeholder="Add a comment..."
        value={value}
        onChange={onChange}
      />
  );
}

CommentBox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

CommentBox.defaultProps = {
  className: '',
};


export default CommentBox;
