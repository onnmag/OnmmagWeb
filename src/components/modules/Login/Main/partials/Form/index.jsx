import React, { useState } from 'react';

import { FORM_TYPE } from '../../enum';

import Login from './partials/Login';
import SignUp from './partials/SignUp';

import styles from './index.scss';

function Form() {
  const [formType, setFormType] = useState(FORM_TYPE.LOGIN);
  return (
    <div className={styles.container}>
      {formType === FORM_TYPE.LOGIN ?
        <Login setFormType={setFormType} /> :
        <SignUp setFormType={setFormType} />
      }
    </div>
  );
}

export default Form;
