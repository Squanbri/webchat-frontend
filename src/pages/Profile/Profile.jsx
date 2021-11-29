import React, { useState } from 'react';

import styles from '../../styles/Profile.module.css';
import Avatar from '../../UI/Avatar';
import ProfileInfo from './ProfileInfo';
import ProfileInfoEdit from './ProfileInfoEdit';

const Profile = () => {
  const [formEdit, setFormEdit] = useState(false)

  return (
    <section className={styles.profile}>
      <div className={styles.header}>
        <h3>Профиль</h3>
        <span>Александр Лекомцев</span>
      </div>

      <div className={styles.body}>
        <div className={styles.blockTop}>
          <div className={styles.profileAvatar}>
            <Avatar/>
          </div>

          <span className={styles.name}>Александр Лекомцев</span>
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
}

export default Profile;