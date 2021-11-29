import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import Companion from './Companion';
// import styles from '../../styles/MessagesAll.module.css';

const CompanionList = observer(() => {
  const { users } = useContext(Context)
  const { selectUser } = users

  return (
    <>
      {users.list.map(user =>
        <Companion 
          user={user}
          key={user.id}
          select={selectUser.id === user.id}
          onClick={() => users.setSelectUser(user.id)}
        />
      )}
    </>
  )
})

export default CompanionList;