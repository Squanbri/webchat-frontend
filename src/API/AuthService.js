import axios from "axios";
import Errors from "../store/errors";

export default class AuthService {
  static async login(email, password) {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/auth`, {email, password})

      return response.data
    } catch (e) {
      Errors.setErrors(e.response)
    }
  }

  static async registration(email, password) {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/registration`, {email, password})

      return response.data
    } catch (e) {
      Errors.setErrors(e.response)
    }
  }

  static async checkAuth() {
    try {
      const authKey = localStorage.getItem('auth_key')
      if (authKey) {
        const [email, password] = authKey.split('&')
        const response = await this.login(email, password)

        if (response) {
          return response
        }
      }

      return false
    } catch (e) {
      Errors.setErrors(e.response)
    }
  }
}