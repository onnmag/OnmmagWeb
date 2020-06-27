import React, { useEffect, useState } from 'react';
import { API_MOCK } from '../../../mocks';
import styles from './index.scss';

function ProfilePage() {
  useEffect(() => {
    fetch(API_MOCK.PROFILE)
      .then(data => {
        data.json()
          .then(response => {
            console.log({ response });
          });
      });
  }, []);
  return (
    <div>
      ProfilePage
    </div>
  );
}

export default ProfilePage;
