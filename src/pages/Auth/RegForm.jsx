import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../index';

import Button from '../../UI/Button';
import TextField from '../../UI/TextField';

const RegForm = ({setForm}) => {
  const { auth } = useContext(Context)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registration = async () => {
    const res = await auth.registration(email, password)

    if (res !== false) {
      navigate('/profile')
    }
  }

  return (
    <div>
      <h1>Регистрация</h1>
      <small>
        Уже есть аккаунт? 
        <em onClick={() => setForm('auth')}>Вход</em>
      </small>

      <TextField 
        label={'Почта'} 
        placeholder={'ivan@mail.com'}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <TextField 
        label={'Пароль'} 
        type='password' 
        placeholder={'6+ символов'}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <Button 
        onClick={registration}
      > 
        Создать аккаунт 
      </Button>
    </div>
  )
}

export default RegForm;