import React from 'react';

import styles from '../../styles/MessagesAll.module.css';
import CompanionList from './СompanionList';

const MessagesAll = () => {
  return (
    <div className={styles.messagesAll}>
      <div className={styles.messagesAllHeader}>
        <input type='text' placeholder='Поиск...'/>
      </div>

      <div className={styles.companionList}>
        <CompanionList/>
      </div>
    </div>
  )
}

export default MessagesAll;