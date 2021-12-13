import { makeAutoObservable } from 'mobx';

import AuthService from '../API/AuthService';
import UsersService from '../API/UsersService';

import User from './user';

class Auth {
  constructor() {    
    this.user = null
    this.isAuth = false
    this.checkAuth()
    makeAutoObservable(this)
  }

  setUser(user) {
    this.user = user
  }

  async login(email, password) {
    const res = await AuthService.login(email, password)

    if (res !== undefined) {
      localStorage.setItem('auth_key', `${email}&${password}`)
      this.setAuth(true)
      const user = new User(res)
      this.setUser(user)
    } 
    else return false
  }

  async registration(email, password) {
    const res = await AuthService.registration(email, password)
    
    if (res !== undefined) {
      localStorage.setItem('auth_key', `${email}&${password}`)
      this.setAuth(true)
      const user = new User(res)
      this.setUser(user)
    }
    else return false
  }

  async logout() {
    localStorage.removeItem('auth_key')
    this.isAuth = false
  }

  async checkAuth() {
    const response = await AuthService.checkAuth()
    if (response) {
      this.login(response.email, response.password)
    }
  }

  async uploadAvatar(file) {
    const response = await UsersService.uploadAvatar(file, this.user?.id)
    if (response) {
      this.checkAuth()
    }
  }

  setAuth(isAuth) {
    this.isAuth = isAuth
  }
}

export default Auth;