import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import Companion from './Companion';
import MessagesService from '../../API/MessagesService';
// import styles from '../../styles/MessagesAll.module.css';

const CompanionList = observer(({search = ''}) => {
  const { users, auth } = useContext(Context)
  // const { selectUser } = users

  const selectUser = (id) => {
    MessagesService.checkAllMessages(id, auth?.user?.id)
    users.fetchUser(id)
    users.setSelectUser(id)
  }

  return (
    <>
      {users.list.filter(user => `${user.firstName.toUpperCase()} ${user.lastName?.toUpperCase() ?? ''}`.indexOf(search.toUpperCase()) > -1 && user.id !== auth.user.id)
        .map(user =>
          <Companion 
            user={user}
            key={user.id}
            select={selectUser.id === user.id}
            onClick={() => selectUser(user.id)}
          />
      )}
    </>
  )
})

export default CompanionList;