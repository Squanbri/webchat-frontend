import { makeAutoObservable } from 'mobx';

import AuthService from '../API/AuthService';
import User from './user';

class Auth {
  constructor() {    
    this.user = null
    this.isAuth = false
    this.checkAuth()
    makeAutoObservable(this)
  }

  async login(email, password) {
    const res = await AuthService.login(email, password)
    
    if (res !== undefined) {
      localStorage.setItem('auth_key', `${email}&${password}`)
      this.setAuth(true)
      this.user = new User(res)
    }
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

  setAuth(isAuth) {
    this.isAuth = isAuth
  }
}

export default Auth;