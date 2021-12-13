import axios from "axios";
import Errors from "../store/errors";

export default class MessagesService {
  static async getLastMessage(userId1, userId2) {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/messages/lastMessage`, {userId1, userId2})

      return response.data
    } catch (e) {
      Errors.setErrors(e.response)
    }
  }

  static async getUnchecked(userId2, userId1) {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/messages/unchecked`, {userId1, userId2})

      return response.data
    } catch (e) {
      Errors.setErrors(e.response)
    }
  }

  static async checkAllMessages(userId1, userId2) {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/messages/checkAll`, {userId1, userId2})

      return response.data
    } catch (e) {
      Errors.setErrors(e.response)
    }
  }

  static async fetchMessages(userId1, userId2) {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/messages/dialog`, {userId1, userId2})

      return response.data
    } catch (e) {
      Errors.setErrors(e.response)
    }
  }

  static async sendMessage(userId1, userId2, text) {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/messages`, {from: userId1, to: userId2, text})

      return response.data
    } catch (e) {
      Errors.setErrors(e.response)
    }
  }
}