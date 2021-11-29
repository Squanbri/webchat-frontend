import axios from "axios";
import Errors from "../store/errors";

export default class UsersService {
  static async fetchUsers() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users`)

      return response.data
    } catch (e) {
      Errors.setErrors(e.response)
    }
  }
  
  static async updateUser(id, firstName, lastName, email, password, phone, city) {
    try {
      const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/users`, {id, firstName, lastName, email, password, phone, city})

      return response.data
    } catch (e) {
      Errors.setErrors(e.response)
    }
  }
}