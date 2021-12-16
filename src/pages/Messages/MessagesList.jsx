import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import Message from './Message';

const MessagesList = observer(() => {
  const { users, auth } = useContext(Context)
  const { selectUser } = users

  return (
    <>
      {users.messageList.map(message =>
        message.from === auth.user?.id 
          ? <Message key={message.id} message={message} user={auth.user} />
          : <Message key={message.id} message={message} user={selectUser} />  
      )}
    </>
  )
})

export default MessagesList;