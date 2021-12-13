import axios from "axios";
import Errors from "../store/errors";

export default class UsersService {
  static async fetchUsers() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/users`)
      
      return response.data
    } catch (e) {
      Errors.setErrors(e.response)
    }
  }

  static async fetchUser(id) {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/user`, {_id: id})
      
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

  static async uploadAvatar(file, id) {
    try {
      const formData = new FormData();
		  formData.append('file', file);
		  formData.append('owner', id);
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/upload`, formData)
      
      return response.data
    } catch (e) {
      Errors.setErrors(e.response)
    }
  }
}