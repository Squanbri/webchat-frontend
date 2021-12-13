
export default class WebSocket {
  socket;

  constructor(socket, setUserOnline) {
    this.socket = socket
    this.setUserOnline = setUserOnline
    // this.setMessage = this.setMessage
  }

  setSocket(id) {
    this.socket = new WebSocket(`wss://${process.env.REACT_APP_BACKEND_HOST_NAME}`)

    this.socket.onopen = () => {
      const msg = {
        method: 'connection',
        data: { id }
      }

      this.socket.send(JSON.stringify(msg))
    }

    this.socket.onmessage = e => {
      const msg = JSON.parse(e.data)
      const method = msg?.method
      const data = msg?.data
      
      switch (method) {
        case 'new connect':
          this.setUserOnline(data?.companionId, true)
          break;
        case 'new message':
          // onMessage(data)
          break;
        case 'disconnect':
          this.setUserOnline(data?.companionId, false)
          break;
        default:
          break;
      }
    }
  }

  onMessage(data, callback) {
    
  }
}