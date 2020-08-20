import {uuid} from 'uuidv4';
export default class User {
  constructor({login, password, age, isDeleted = false}) {
    this.id = uuid();
    this.login = login;
    this.password = password;
    this.age = age;
    this.isDeleted = isDeleted;
  }
}