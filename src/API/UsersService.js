import axios from "axios";
import Errors from "../store/errors";

export default class UsersService {
  static async fetchUsers() {
    try {
      const response = await axios.get(`http://localhost:5000/api/users`)

      return response.data
    } catch (e) {
      Errors.setErrors(e.response)
    }
  }
  
  static async updateUser(id, firstName, lastName, email, password, phone, city) {
    try {
      const response = await axios.put(`http://localhost:5000/api/users`, {id, firstName, lastName, email, password, phone, city})

      return response.data
    } catch (e) {
      Errors.setErrors(e.response)
    }
  }
}