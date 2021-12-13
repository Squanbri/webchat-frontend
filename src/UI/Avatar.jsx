import React from 'react';

import { ReactComponent as DefaultIcon } from '../assets/icons/avatar.svg';
import styles from '../styles/Avatar.module.css';

const Avatar = ({src, online}) => {

  if (src) {
    return(
      <div 
        className={online ? `${styles.avatarWrapper} ${styles.online}` : styles.avatarWrapper}
      >
        <img 
          className={styles.avatar}
          src={`${process.env.REACT_APP_BACKEND_URL}/public/${src}`} 
          alt="Аватар"
        />
      </div>
    )
  }

  return (
    <div 
      className={online ? `${styles.avatarWrapper} ${styles.online}` : styles.avatarWrapper}
    >
      <DefaultIcon 
        className={`${styles.avatar} ${styles.online}`}
        src={DefaultIcon}
      />
    </div>
  )
}

export default Avatar;