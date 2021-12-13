import { makeAutoObservable, observable, runInAction, values } from 'mobx';

class Errors {
  static index = 0;
  static errors = observable.map();

  constructor() {
    makeAutoObservable(this);
  }

  static setErrors(response) {
    const errors = response?.data?.errors
    errors?.forEach(error => this.setError(error))
  }

  static setError(error) {
    runInAction(() => { // Добавить ошибку
      const errorObj = {
        id: this.index,
        text: error
      }
      this.errors.set(this.index, errorObj); 
      this.setTimeOutError(this.index)
    });
    
    this.index++
  }

  static deleteError(id) {
    runInAction(() => this.errors.delete(id))
  }

  static setTimeOutError(id) {
    setTimeout(() => this.deleteError(id), 3000)
  }

  static get list() {
    return values(this.errors)
  }

  static get isLength() {
    return this.errors.size !== 0;
  }
}

export default Errors;