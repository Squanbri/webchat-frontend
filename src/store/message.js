import { makeAutoObservable } from "mobx";

class Message {
  constructor(message) {
    this.id = message._id
    this.check = message.check
    this.createdAt = message.created_at
    this.text = message.text
    this.from = message.from
    makeAutoObservable(this)
  }
}

export default Message;