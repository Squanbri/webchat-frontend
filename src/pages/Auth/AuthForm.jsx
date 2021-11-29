import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Context } from '../../index';

import Button from '../../UI/Button';
import TextField from '../../UI/TextField';

const RegForm = ({setForm}) => {
  const { auth } = useContext(Context)
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const res = await auth.login(email, password)

    if (res !== false) {
      navigate('/profile')
    }
  }

  return (
    <div>
      <h1>Авторизация</h1>
      <small>
        Ещё нет аккаунта? 
        <em onClick={() => setForm('reg')}>Создать</em>
      </small>

      <TextField 
        label={'Почта'} 
        placeholder={'ivan@mail.com'}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <TextField 
        label={'Пароль'} 
        placeholder={'6+ символов'}
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <Button 
        onClick={login}
      > 
        Войти 
      </Button>
    </div>
  )
}

export default RegForm;