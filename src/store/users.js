import { makeAutoObservable, observable, values } from "mobx";

import MessagesService from '../API/MessagesService';
import AuthService from '../API/AuthService';
import UsersService from '../API/UsersService';
import Message from './message';
import User from './user';

class Users {
  constructor() {
    this.id = null
    this.selectUser = null
    this.users = observable.map()
    this.messages = observable.map()
    makeAutoObservable(this)
    this.fetchUsers()
  }

  async fetchUsers() {
    const response = await UsersService.fetchUsers()

    if (response) {
      const users = response.users

      const {_id} = await AuthService.checkAuth()
      console.log(_id)
      this.id = _id

      users.filter(user => user._id !== this.id)
          .forEach(user => this.setUser(user))
    }
  }

  async fetchUser(id) {
    const response = await UsersService.fetchUser(id)

    if (response) {
      const user = response.user
      
      this.setUser(user)
    }
  }

  setUser(item) {
    const user = new User(item)
    this.users.set(user.id, user)
    user.getMessages(this.id)
    
    if (this.selectUser === null) this.setSelectUser(user.id)
  }

  setSelectUser(id) {
    const user = this.users.get(id)
    this.selectUser = user
    this.fetchMessages(id)
  }

  setUserOnline(id, online) {
    const user = this.users.get(id)
    user.online = online
  }

  setMessage(item) {
    const message = new Message(item)
    this.messages.set(message.id, message)
  }

  get list() {
    return values(this.users)
  }

  get messageList() {
    return values(this.messages)
  }

  async fetchMessages(id) {
    this.messages.clear()
    const response = await MessagesService.fetchMessages(id, this.id)

    if (response) {
      response.messages.forEach(message => this.setMessage(message))
    }
  }

  async sendMessage(message) {
    const response = await MessagesService.sendMessage(this.id, this.selectUser.id, message)
    
    if (response) {
      this.setMessage(response.message)
    }
  }
}

export default Users;