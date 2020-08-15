import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SUBSCRIPTION_STATUS } from '../../../Enums/STATICS';
import styles from './index.scss';

function SubscriptionStatus({ status, onClick }) {
  switch (status) {
    case SUBSCRIPTION_STATUS.SUBSCRIBED:
      return (
        <button
          onClick={onClick.bind(status)}
          className={cx([styles.btn, styles.subscribed])}
        >
          {SUBSCRIPTION_STATUS.SUBSCRIBED}
        </button>
      );
    case SUBSCRIPTION_STATUS.SUBSCRIBE:
      return (
        <button
          onClick={onClick.bind(status)}
          className={cx([styles.btn, styles.subscribe])}
        >
          {SUBSCRIPTION_STATUS.SUBSCRIBE}
        </button>
      );
    default:
      return null;
  }
}

SubscriptionStatus.propTypes = {
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SubscriptionStatus;
