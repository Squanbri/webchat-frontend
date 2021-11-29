import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import Avatar from '../../UI/Avatar';
import ProfileInfo from './ProfileInfo';
import ProfileInfoEdit from './ProfileInfoEdit';
import styles from '../../styles/Profile.module.css';

const Profile = observer(() => {
  const { auth } = useContext(Context)
  const { user } = auth

  const [formEdit, setFormEdit] = useState(false)

  return (
    <section className={styles.profile}>
      <div className={styles.header}>
        <h3>Профиль</h3>
        <span>{user?.firstName} {user?.lastName}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.blockTop}>
          <div className={styles.profileAvatar}>
            <Avatar/>
          </div>

          <span className={styles.name}>{user?.firstName} {user?.lastName}</span>
          {/* <small className={styles.login}>@flitay</small> */}
        </div>

        <div className={styles.blockBottom}>
          {formEdit
            ? <ProfileInfoEdit setFormEdit={setFormEdit}/>
            : <ProfileInfo setFormEdit={setFormEdit}/>
          }
        </div>
      </div>
    </section>
  )
})

export default Profile;