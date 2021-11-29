import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import Button from '../../UI/Button';
import styles from '../../styles/Profile.module.css';

const ProfileInfo = observer(({setFormEdit}) => {
  const { auth } = useContext(Context)
  const { user } = auth
  
  const [date, setDate] = useState(new Date())
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()

  setInterval(() => setDate(new Date()), 1000 * 60)

  return (
    <>
      <div className={styles.blockInfo}>
        <h3>Контакты</h3> 

        <small className={styles.profileEmail}>Почта:</small>
        <span>{ user?.email || 'Не указан' }</span>

        <small>Город:</small>
        <span>{ user?.city || 'Не указан' }</span>

        <small>Телефон:</small>
        <span>{ user?.phone || 'Не указан' }</span>

        <small>Местное время:</small>
        <span>{ hours } : { minutes }</span>
      </div>

      <div className={styles.buttons}>
        <Button onClick={() => setFormEdit(true)}>Редактировать</Button>
        <Button onClick={() => auth.logout()}>Выйти</Button>
      </div>
    </>
  )
})

export default ProfileInfo;