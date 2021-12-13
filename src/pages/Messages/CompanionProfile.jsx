import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import styles from '../../styles/CompanionProfile.module.css';
import Avatar from '../../UI/Avatar';

const CompanionProfile = observer(() => {
  const { users } = useContext(Context)
  const { selectUser } = users

  return (
    <div className={styles.profile}>
      <div className={styles.blockTop}>
        <span className={styles.avatar}>
          <Avatar online={selectUser?.online} src={selectUser?.avatar} />
        </span>
        <span className={styles.name}>{selectUser?.firstName} {selectUser?.lastName}</span>
        {/* <small className={styles.login}>@squanbri</small> */}
      </div>

      <div className={styles.blockBottom}>
        <h4>Контакты</h4>

        <small>Почта:</small>
        <span>{selectUser?.email}</span>

        <small>Город:</small>
        <span>{selectUser?.city || 'Не указан'}</span>

        <small>Телефон:</small>
        <span>{selectUser?.phone || 'Не указан'}</span>
      </div>
    </div>
  )
})

export default CompanionProfile;