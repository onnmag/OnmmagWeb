import React, { useEffect, useState } from 'react';

import Cover from './partials/Cover';
import Wall from './partials/Wall';
import Post from './partials/Post';

import { MOCK } from '../../../mocks';
import styles from './index.scss';

function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    MOCK()
      .then(response => {
        setProfileData(response);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  const expandPost = (id) => {
    console.log({ id });
  };

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  if (isError) {
    return (
      <div>Error</div>
    );
  }

  if (profileData) {
    const { description, wall, posts } = profileData;
    return (
      <section className={styles.container}>
        <Cover data={description} />
        <div className={styles.wallContainer}>
          <Wall data={wall} isVerified={description.isVerified} name={description.name} />
          <section className={styles.postContainer}>
            {posts.map(post => (
              <Post data={post} expandPost={expandPost} />
            ))}
          </section>
        </div>
      </section>
    );
  }
}

export default ProfilePage;
