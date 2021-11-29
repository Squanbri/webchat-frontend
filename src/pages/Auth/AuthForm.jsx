import React, { useState, useContext } from 'react';
import { Context } from '../../index';

import Button from '../../UI/Button';
import TextField from '../../UI/TextField';

const RegForm = ({setForm}) => {
  const { auth } = useContext(Context)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Регистрация</h1>
      <small>
        Ещё нет аккаунта? 
        <em onClick={() => setForm('reg')}>Создать</em>
      </small>

      <TextField 
        label={'Почта'} 
        placeholder={'ivan@mail.com'}
        onChange={e => setEmail(e.target.value)}
      />

      <TextField 
        label={'Пароль'} 
        placeholder={'6+ символов'}
        type='password'
        onChange={e => setPassword(e.target.value)}
      />

      <Button 
        onClick={() => auth.login(email, password)}
      > 
        Войти 
      </Button>
    </div>
  )
}

export default RegForm;