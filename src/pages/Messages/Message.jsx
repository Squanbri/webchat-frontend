import React from 'react';

import styles from '../../styles/Message.module.css';
import Avatar from '../../UI/Avatar';

const Message = ({message, user}) => {
  const time = new Date(message?.createdAt)
  const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
  const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()

  return (
    <div className={styles.message}>
      <div className={styles.avatar}>
        <Avatar src={user?.avatar}/> 
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <span className={styles.name}>{user?.firstName} {user?.lastName}</span>
          <span className={styles.time}>{hours}:{minutes}</span>
        </div>

        <p className={styles.text}>
          {message?.text}
        </p>
      </div>
    </div>
  )
}

export default Message;