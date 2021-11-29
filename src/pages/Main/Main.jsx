import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import styles from '../../styles/Main.module.css'
import Button from '../../UI/Button';

const Main = observer(() => {
  const { auth } = useContext(Context)
  const navigate  = useNavigate();

  return (
    <section className={styles.main}>
      <div className={styles.block}>
        <h1>
          Будь <em>на связи</em> <br/>
          со своими коллегами
        </h1>
        <p>Наш чат является крупнешим хабом, где группы людей могут  достигать настоящего дзена в своей работе.</p>

        {auth.isAuth === false &&
          <Button onClick={() => navigate('/auth')}>Создать аккаунт</Button>
        }

        <small><em>Спонсоры:</em> к сожалению, отсутствуют :( </small>
      </div>
    </section>
  )
})

export default Main;