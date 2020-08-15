import React, { useState } from 'react';

import CommentBox from '../../../../../../../../common/CommentBox';
import Button from '../../../../../../../../common/Button';

import styles from './index.scss';

function UserCommentSection() {
  const [inputValue, setInputValue] = useState('');
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className={styles.container}>
      <CommentBox
        className={styles.input}
        value={inputValue}
        onChange={handleInputValue}
      />
      <Button className={styles.btn}>
        Post
      </Button>
    </div>
  );
}

export default UserCommentSection;
