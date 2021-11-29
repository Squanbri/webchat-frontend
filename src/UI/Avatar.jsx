import React from 'react';

import { ReactComponent as DefaultIcon } from '../assets/icons/avatar.svg';
import styles from '../styles/Avatar.module.css';

const Avatar = ({src}) => {

  if (src) {
    return(
      <img 
        className={styles.avatar}
        src={src} 
        alt="Аватар"
      />
    )
  }

  return (
    <DefaultIcon 
      className={styles.avatar}
      src={DefaultIcon}
    />
  )
}

export default Avatar;