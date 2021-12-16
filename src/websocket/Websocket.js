import { useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from "../index";

const Websocket = observer(() => {
  const { auth, users } = useContext(Context);

  useEffect(() => {
    if (auth?.user) {
      const socket = new WebSocket(`ws://${process.env.REACT_APP_BACKEND_HOST_NAME}`)
    
      socket.onopen = () => {
        const msg = {
          method: 'connection',
          data: {
            id: auth?.user?.id
          }
        }

        socket.send(JSON.stringify(msg))
      }

      socket.onmessage = e => {
        const msg = JSON.parse(e.data)
        const method = msg?.method
        const data = msg?.data
        console.log(data)
        switch (method) {
          case 'new connect':
            users.setUserOnline(data?.companionId, true)
            break;
          case 'new message':
            const user = users.users.get(data?.from)
            user.setLastMessage(data?.text)
            user.setTimeLastMessage(data?.created_at)

            if (users?.selectUser?.id === data?.from) {
              users.setMessage(data)
            } else {
              user.setUnchecked(user.unchecked + 1)
            }
            // users.fetchMessages(users.selectUser.id)
            break;
          case 'disconnect':
            if (data?.companionId !== undefined)
              users.setUserOnline(data?.companionId, false)
            break;
          default:
            break;
        }
      }

    }
  }, [auth?.user])

  return null
})

export default Websocket;