import React from 'react';
import PropTypes from 'prop-types';

import random from 'random-name';

import Comment from './partials/Comment';
import { RANDOM_COMMENTS } from '../../../Enums/STATICS';

import styles from './index.scss';


function Comments({ id }) {
  // const [comments, setComments] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   // TODO: **API** need to replace with RealAPI
  //
  //   axios({
  //     method: 'GET',
  //     url: 'https://jsonplaceholder.typicode.com/comments',
  //   })
  //     .then(response => {
  //       setComments(response.data.slice(0, 50));
  //       setIsLoading(false);
  //     }).catch(() => {
  //     setIsLoading(false);
  //   });
  // }, []);
  // if (isLoading) {
  //   return (
  //     <div>
  //       Loading...
  //     </div>
  //   );
  // }
  return (
    <div className={styles.container}>
      {RANDOM_COMMENTS.map(comment => (
        <Comment comment={comment} userName={random.first()} profileLink="" id={id} />
      ))}
    </div>
  );
}


Comments.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Comments;
