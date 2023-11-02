import { BirthdayError } from '../errors/BirthdayError'
import { NameError } from '../errors/NameError'
import { USER_ERROR_CODES, USER_ERROR_MESSAGES, UserError } from '../errors/UserError'

export class User {
  private _name: string = ''
  private _birthday: Date = new Date()

  constructor(name: string, birthday: Date) {
    if (name && name.length >= 5) {
      this._name = name
    } else {
      throw new UserError(
        USER_ERROR_MESSAGES.INVALID_NAME,
        USER_ERROR_CODES.INVALID_NAME_AT_CONSTRUCTOR
      )
    }

    if (birthday < new Date()) {
      this._birthday = birthday
    } else {
      throw new UserError(
        USER_ERROR_MESSAGES.INVALID_BIRTHDAY,
        USER_ERROR_CODES.INVALID_BIRTHDAY_AT_CONSTRUCTOR
      )
    }
  }

  get name() {
    return this._name
  }

  set name(name: string) {
    if (name && name.length >= 5) {
      this._name = name
    } else {
      throw new UserError(
        USER_ERROR_MESSAGES.INVALID_NAME,
        USER_ERROR_CODES.INVALID_NAME_AT_SETTER
      )
    }
  }

  get birthday() {
    return this._birthday
  }

  set birthday(birthday: Date) {
    if (birthday < new Date()) {
      this._birthday = birthday
    } else {
      throw new UserError(
        USER_ERROR_MESSAGES.INVALID_BIRTHDAY,
        USER_ERROR_CODES.INVALID_BIRTHDAY_AT_SETTER
      )
    }
  }
}