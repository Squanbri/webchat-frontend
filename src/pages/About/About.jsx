import React from 'react';

import { ReactComponent as FastAccessIcon } from '../../assets/icons/fast-access.svg';
import { ReactComponent as SecurityIcon } from '../../assets/icons/security.svg';
import { ReactComponent as FullControlIcon } from '../../assets/icons/full-control.svg';
import styles from '../../styles/About.module.css'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.block}>
        <h1>
          <em>Лучшее</em> приложение <br/>
          для связи
        </h1>
        <p>Наш чат является крупнешим хабом, где группы людей могут  достигать настоящего дзена в своей работе.</p>

        <small><em>Спонсоры:</em> к сожалению, отсутствуют :( </small>
      </div>

      <div className={styles.ourAdvantages}>
        <h3>Наши преимущества</h3>

        <div className={styles.advantages}>
          <div className={styles.advantage}>
            <FastAccessIcon/>
            <span>Быстрый доступ</span>
            <small>Для регистрации необходимо указать лишь свою почту. </small>
          </div>

          <div className={styles.advantage}>
            <SecurityIcon/>
            <span>Безопасность</span>
            <small>Весь сайт находится на высоко-защищаемом протоколе https </small>
          </div>

          <div className={styles.advantage}>
            <FullControlIcon/>
            <span>Полный контроль</span>
            <small>Абсолютный доступ ко всем функциям сайта с коробки </small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;