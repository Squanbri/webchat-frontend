import React from 'react';
import Button from '../../UI/Button';
import TextField from '../../UI/TextField';

const RegForm = ({setForm}) => {
  return (
    <div>
      <h1>Регистрация</h1>
      <small>
        Уже есть аккаунт? 
        <em onClick={() => setForm('auth')}>Вход</em>
      </small>

      <TextField label={'Почта'} placeholder={'ivan@mail.com'}/>

      <TextField label={'Пароль'} placeholder={'6+ символов'}/>

      <Button> Создать аккаунт </Button>
    </div>
  )
}

export default RegForm;