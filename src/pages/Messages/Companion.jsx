import React from 'react';

import Avatar from '../../UI/Avatar';
import styles from '../../styles/MessagesAll.module.css';
import { observer } from 'mobx-react-lite';

const Companion = observer(({ user, select, onClick }) => {
  const monthsTitle = ["Янв.", "фев.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сен.", "Окт.", "Ноя.", "Дек."];
  const lastTime = user?.timeLastMessage
  const month = monthsTitle[new Date(lastTime).getMonth()]
  const day = new Date(lastTime).getDate() < 10 ? `0${new Date(lastTime).getDate()}` : new Date(lastTime).getDate()
  
  return (
    <div 
      className={ select
        ? `${styles.companion} ${styles.companionSelect}`
        : styles.companion
      }
      onClick={onClick}
    >
      <div className={styles.companionAvatar}>
        <Avatar/>
      </div>

      <div className={styles.middleCompanionBlock}>
        <span className={styles.companionName}>{user?.firstName} {user?.lastName}</span>
        <span className={styles.companionMessage}>{user.lastMessage}</span>
      </div>

      <div className={styles.rightCompanionBlock}>
        {lastTime && 
          <span className={styles.companionMessageTime}>{day} {month}</span>
        }
        {user.isUnchecked &&
          <span className={styles.companionMessageCount}>{user.unchecked}</span>
        }
      </div>
    </div>
  )
})

export default Companion;