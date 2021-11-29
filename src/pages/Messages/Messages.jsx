import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import MessagesAll from './MessagesAll';
import CompanionProfile from './CompanionProfile';
import MessagesWithCompanion from './MessagesWithCompanion';
import styles from '../../styles/Messages.module.css';

const Messages = observer(() => {
  const { auth } = useContext(Context)
  const { user } = auth
  
  return (
    <section className={styles.messages}>
      <div className={styles.messageHeader}>
        <h1>Чат</h1>
        <span>{user?.firstName} {user?.lastName}</span>
      </div>

      <div className={styles.messageContain}>
        <MessagesAll/>
        <MessagesWithCompanion/>
        <CompanionProfile/>
      </div>
    </section>
  )
})

export default Messages;