import React, { useEffect, useState } from 'react';

import Cover from './partials/Cover';
import Wall from './partials/Wall';
import Post from './partials/Post';
import DetailedPostView from './partials/DetailedPostView';

import Modal from '../../common/Modal';

import { MOCK } from '../../../mocks';

import { mediaQuery } from '../../../utils';

import styles from './index.scss';

function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [isModalOpen, handleModalState] = useState(false);
  const [selectedPost, setSelectedPost] = useState('');

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
    setSelectedPost(id);
    handleModalState(true);
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
    const { description, wall, posts, profileId } = profileData;
    return (
      <section className={styles.container}>
        {!mediaQuery(600) && <Cover data={description} />}
        <div className={styles.wallContainer}>
          <Wall data={wall} isVerified={description.isVerified} name={description.name} />
          <section className={styles.postContainer}>
            {posts.map(post => (
              <Post data={post} expandPost={expandPost} />
            ))}
          </section>
        </div>
        <Modal handleModalState={handleModalState} isOpen={isModalOpen}>
          <DetailedPostView
            id={selectedPost}
            userInfo={{
              name: description.name,
              isSubscribed: description.isSubscribed,
              isVerified: description.isVerified,
              profilePicture: wall.profilePicture,
              profileId,
            }}
          />
        </Modal>
      </section>
    );
  }
}

export default ProfilePage;
