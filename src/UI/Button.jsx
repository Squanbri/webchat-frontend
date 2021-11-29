import React from 'react';

import styles from '../styles/Button.module.css';

const Button = ({ onClick, children}) => {

  const onClickEvent = () => {
    if (typeof onClick === 'function') {
      onClick()
    }
  }

  return (
    <button
      className={styles.button}
      onClick={() => onClickEvent()}
    >
      {children}
    </button>
  )
}

export default Button;