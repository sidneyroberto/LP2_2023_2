import { BirthdayError } from '../errors/BirthdayError'
import { NameError } from '../errors/NameError'

export class User {
  private _name: string = ''
  private _birthday: Date = new Date()

  constructor(name: string, birthday: Date) {
    this.name = name
    this.birthday = birthday
  }

  get name() {
    return this._name
  }

  set name(name: string) {
    if (name && name.length >= 5) {
      this._name = name
    } else {
      throw new NameError()
    }
  }

  get birthday() {
    return this._birthday
  }

  set birthday(birthday: Date) {
    if (birthday <= new Date()) {
      this._birthday = birthday
    } else {
      throw new BirthdayError()
    }
  }
}