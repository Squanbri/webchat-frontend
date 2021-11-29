import React, {useState} from 'react';

import _uniqueId from 'lodash/uniqueId';
import styles from '../styles/TextField.module.css'
import { ReactComponent as EyeOpenIcon } from '../assets/icons/eyeOpen.svg';
import { ReactComponent as EyeClosedIcon } from '../assets/icons/eyeClosed.svg';

const TextField = ({type = 'text', label, placeholder, value, onChange}) => {
  const [id] = useState(_uniqueId('TextField-'));
  const [isShow, setShow] = useState(false);
  const [inputType, setInputType] = useState(type)

  const showPassword = () => {
    setShow(true)
    setInputType('text')
  }

  const hidePassword = () => {
    setShow(false)
    setInputType('password')
  }
  
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

      <input 
        type={inputType} 
        id={id}
        className={styles.input} 
        placeholder={placeholder}
        value={value}
        onChange={e => onChangeEvent(e)}
      />  
      
      {type === 'password' && isShow &&
        <EyeOpenIcon className={styles.passwordEye} onClick={hidePassword} />
      }
      {type === 'password' && isShow === false &&
        <EyeClosedIcon className={styles.passwordEye} onClick={showPassword} />
      }
    </div>
  )
}

export default TextField;