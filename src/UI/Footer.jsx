import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { Context } from '../index';
import { ReactComponent as LogoIcon } from '../assets/icons/logo.svg';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const { auth } = useContext(Context)

  return (
    <footer className={styles.footer}>
      <div className={styles.blockLeft}>
        <LogoIcon className={styles.logo} />

        <p>Наш чат является крупнешим хабом, где группы людей могут  достигать настоящего дзена в своей работе.</p>
      </div>

      <div className={styles.blockRight}>
        <ul>
          <li>
            <Link to='/' > Главная </Link>
          </li>
          {auth.isAuth && 
            <>
              <li>
                <Link to='/profile' > Профиль </Link>
              </li>
              <li>
                <Link to='/messages' > Сообщения </Link>
              </li>
            </>
          }
          <li>
            <Link to='/about' > О нас </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;