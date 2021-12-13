import { makeAutoObservable, observable } from "mobx";

import UsersService from '../API/UsersService';
import MessagesService from '../API/MessagesService';

class User {
  constructor(user) {
    this.id = user?._id
    this.firstName = user?.firstName
    this.lastName = user?.lastName
    this.email = user?.email
    this.password = user?.password
    this.city = user?.city
    this.phone = user?.phone
    this.avatar = user?.avatar
    this.online = user?.online || false

    this.lastMessage = null
    this.timeLastMessage = null
    this.unchecked = 0
    this.messages = observable.map()
    makeAutoObservable(this)
  }

  setId(id) {
    this.id = id
  }

  setFirstName(firstName) {
    this.firstName = firstName
  }

  setLastName(lastName) {
    this.lastName = lastName
  }

  setEmail(email) {
    this.email = email
  }

  setPassword(password) {
    this.password = password
  }

  setCity(city) {
    this.city = city
  }

  setPhone(phone) {
    this.phone = phone
  }

  setLastMessage(message) {
    this.lastMessage = message
  }
  
  setTimeLastMessage(timeLastMessage) {
    this.timeLastMessage = timeLastMessage
  }
  
  setUnchecked(unchecked) {
    this.unchecked = unchecked
  }

  async getMessages(id) {
    const lastMessage = await MessagesService.getLastMessage(id, this.id)
    this.setLastMessage(lastMessage?.text)
    this.setTimeLastMessage(lastMessage?.created_at)

    const uncheckedMessages = await MessagesService.getUnchecked(this.id, id)
    this.setUnchecked(uncheckedMessages)
  }

  async update(firstName, lastName, email, password, phone, city) {
    const response = await UsersService.updateUser(this.id, firstName, lastName, email, password, phone, city)
    
    if (response) {
      localStorage.setItem('auth_key', `${email}&${password}`)
      this.setFirstName(firstName)
      this.setLastName(lastName)
      this.setEmail(email)
      this.setPassword(password)
      this.setCity(city)
      this.setPhone(phone)
    }
  }

  get isUnchecked() {
    return this.unchecked > 0
  }
}

export default User;