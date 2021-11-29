import React, { useState, useContext } from 'react'; 
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import Button from '../../UI/Button';
import TextField from '../../UI/TextField';
import styles from '../../styles/Profile.module.css';

const ProfileInfoEdit = observer (({setFormEdit}) => {
  const { auth } = useContext(Context)
  const { user } = auth

  const [firstName, setFirstName] = useState(user?.firstName || '')
  const [lastName, setLastName] = useState(user?.lastName || '')
  const [email, setEmail] = useState(user?.email || '')
  const [password, setPassword] = useState(user?.password || '')
  const [city, setCity] = useState(user?.city || '')
  const [phone, setPhone] = useState(user?.phone || '')

  const updateUser = () => {
    user.update(firstName, lastName, email, password, phone, city)
    setFormEdit(false)
  }

  return (
    <>
      <div className={styles.blockInfoEdit}>
        <TextField 
          label={'Имя'} 
          placeholder={'Александр'} 
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />

        <TextField 
          label={'Фамилия'} 
          placeholder={'Лекомцев'}
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />

        <TextField 
          className={styles.full} 
          label={'Почта'} 
          placeholder={'flitays@yandex.ru'}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />


        <TextField 
          className={styles.full} 
          label={'Пароль'} 
          placeholder={'************'}
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <TextField 
          className={styles.full} 
          label={'Телефон'} 
          placeholder={'+79157065549'}
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />

        <TextField 
          className={styles.full} 
          label={'Город'} 
          placeholder={'Тверь'}
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </div>

      <div className={styles.buttons}>
        <Button onClick={() => updateUser()}>Сохранить</Button>
        <Button onClick={() => setFormEdit(false)}>Отменить</Button>
      </div>
    </>
  )
})

export default ProfileInfoEdit;