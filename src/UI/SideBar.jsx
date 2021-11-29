import React, { useContext } from 'react';
import { NavLink  } from "react-router-dom";
import { observer } from 'mobx-react-lite';

import { Context } from '../index';
import { ReactComponent as LogoIcon } from '../assets/icons/logo.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/user-profile.svg';
import { ReactComponent as DashboardIcon } from '../assets/icons/layout-dashboard.svg';
import { ReactComponent as MessagesIcon } from '../assets/icons/message.svg';
import { ReactComponent as QuestionIcon } from '../assets/icons/question.svg';
import styles from '../styles/Sidebar.module.css';

const SideBar = observer(() => {
  const { auth } = useContext(Context);

  if (!auth.isAuth) {
    return (
      <aside className={styles.sidebar}>
        <LogoIcon className={styles.logo} />
  
        <ul className={styles.menu}>
          <NavLink  to="/auth" className={({ isActive }) => isActive ? styles.active : ''}>
            <li>
              <ProfileIcon/>
            </li>
          </NavLink>
          <NavLink  to="/" className={({ isActive }) => isActive ? styles.active : ''}>
            <li>
              <DashboardIcon/>
            </li>
          </NavLink>
        </ul>

        <NavLink to="/about" className={({ isActive }) => isActive ? styles.questionActive : styles.question} >
          <QuestionIcon />
        </NavLink>
      </aside>
    )
  }

  return (
    <aside className={styles.sidebar}>
      <LogoIcon className={styles.logo} />

      <ul className={styles.menu}>
        <NavLink  to="/profile" className={({ isActive }) => isActive ? styles.active : ''}>
          <li>
            <ProfileIcon/>
          </li>
        </NavLink>
        <NavLink  to="/" className={({ isActive }) => isActive ? styles.active : ''}>
          <li>
            <DashboardIcon/>
          </li>
        </NavLink>
        <NavLink  to="/messages" className={({ isActive }) => isActive ? styles.active : ''}>
          <li>
            <MessagesIcon/>
          </li>
        </NavLink>
      </ul>

      <NavLink to="/about" className={({ isActive }) => isActive ? styles.questionActive : styles.question} >
        <QuestionIcon />
      </NavLink>
    </aside>
  )
})

export default SideBar;