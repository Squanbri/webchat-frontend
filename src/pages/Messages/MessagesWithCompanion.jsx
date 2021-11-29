import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import MessagesList from './MessagesList';
import TextArea from '../../UI/TextArea';
import Avatar from '../../UI/Avatar';
import {ReactComponent as SendIcon} from '../../assets/icons/send.svg';
import styles from '../../styles/MessagesWithCompanion.module.css';

const MessagesCompanion = observer(() => {
  const { users } = useContext(Context)
  const { selectUser } = users

  const [message, setMessage] = useState('')

  const sendMessage = () => {
    users.sendMessage(message)
    setMessage('')
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.name}>{selectUser?.firstName} {selectUser?.lastName}</span>
        {/* <small className={styles.online}>был в сети 5 мин назад</small> */}
      </div>

      <div className={styles.messages}>
        <MessagesList/>
      </div>

      <div className={styles.footer}>
        <div className={styles.avatarNearInput}>
          <Avatar/>
        </div>
        
        <TextArea 
          placeholder={'Напишите сообщение...'}
          value={message}
          onChange={e => setMessage(e.target.value)}
        />

        <SendIcon 
          className={styles.sendButton}
          onClick={sendMessage}
        />
      </div>
    </div>
  )
})

export default MessagesCompanion;