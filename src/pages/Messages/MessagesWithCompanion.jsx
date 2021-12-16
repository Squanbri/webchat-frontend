import React, { useState, useContext, useRef, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import MessagesList from './MessagesList';
import TextArea from '../../UI/TextArea';
import Avatar from '../../UI/Avatar';
import {ReactComponent as SendIcon} from '../../assets/icons/send.svg';
import styles from '../../styles/MessagesWithCompanion.module.css';

const MessagesCompanion = observer(() => {
  const { users, auth } = useContext(Context)
  const { selectUser } = users

  const messagesEndRef = useRef(null);
  const [message, setMessage] = useState('')

  const keyDown = e => {
    if(e.keyCode === 13){
      e.preventDefault()
      sendMessage()
    }
  }

  const sendMessage = () => {
    if (message.trim() !== '') {
      users.sendMessage(message)
      setMessage('')

      const socket = new WebSocket(`wss://${process.env.REACT_APP_BACKEND_HOST_NAME}`)
      socket.onopen = () => {
        socket.send(JSON.stringify({
          method: 'message',
          data: {
            fromId: auth?.user.id,
            id: users?.selectUser?.id,
            message
          }
        }))
        users.fetchUser(users?.selectUser?.id)
        socket.close()
      }
      // const messages = document.querySelector('.MessagesWithCompanion_messages__OchZ-')
      // messages?.scroll(0, messages.scrollHeight)
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scroll(0, messagesEndRef.current?.scrollHeight)
  }, [users.messageList])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.name}>{selectUser?.firstName} {selectUser?.lastName}</span>
        {/* <small className={styles.online}>был в сети 5 мин назад</small> */}
      </div>

      <div 
        className={styles.messages}  
        ref={messagesEndRef}
      >
        <MessagesList/>
      </div>

      <div className={styles.footer}>
        <div className={styles.avatarNearInput}>
          <Avatar src={auth.user?.avatar}/>
        </div>
        
        <TextArea 
          placeholder={'Напишите сообщение...'}
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={e => keyDown(e)}
        />

        <SendIcon 
          className={styles.sendButton}
          onClick={sendMessage}
        />
      </div>
    </div>
  )
})

export default MessagesCompanion;