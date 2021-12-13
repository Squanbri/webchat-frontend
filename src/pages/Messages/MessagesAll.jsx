import React, { useState } from 'react';

import styles from '../../styles/MessagesAll.module.css';
import CompanionList from './СompanionList';

const MessagesAll = () => {
  const [search, setSearch] = useState('')

  return (
    <div className={styles.messagesAll}>
      <div className={styles.messagesAllHeader}>
        <input 
          type='text' 
          placeholder='Поиск...'
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.companionList}>
        <CompanionList search={search}/>
      </div>
    </div>
  )
}

export default MessagesAll;