import React, {useState} from 'react';
import _uniqueId from 'lodash/uniqueId';
import styles from '../styles/TextArea.module.css'

const TextArea = ({label, placeholder, value, onChange}) => {
  const [id] = useState(_uniqueId('TextArea-'));
  
  const onChangeEvent = e => {
    if (typeof onChange === 'function') {
      onChange(e)
    }
  }

  return (
    <div className={styles.wrapper}>
      {label &&
        <label 
          htmlFor='id'
          className={styles.label}
        >
          {label}
        </label>
      }

      <textarea 
        id={id}
        className={styles.input} 
        placeholder={placeholder}
        value={value}
        onChange={e => onChangeEvent(e)}
      /> 
    </div>
  )
}

export default TextArea;