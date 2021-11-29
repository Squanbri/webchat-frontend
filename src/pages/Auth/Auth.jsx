import React, { useState } from 'react';

import styles from '../../styles/Auth.module.css'
import AuthForm from './AuthForm';
import RegForm from './RegForm';

const Auth = () => {
  const [form, setForm] = useState('auth')

  return (
    <section>
      <div className={styles.blockLeft}>
        <h1><em>Мы объединяем людей,</em><br/> услуги и компании</h1>
        <p>Наш чат является крупнешим хабом, где группы людей могут  достигать настоящего дзена в своей работе.</p>
      </div>

      <div className={styles.blockRight}>
        <small>Бесплатный сервис</small>

        {form === 'auth'
          ? <AuthForm setForm={() => setForm('reg')} />
          : <RegForm setForm={() => setForm('auth')} />
        }

        <small>
          This site is protected by reCAPTCHA and the Google <br/>
          <em>Политика безопасности</em> и <em>Пользовательское соглашение</em>
        </small>
      </div>
    </section>
  )
}

export default Auth;