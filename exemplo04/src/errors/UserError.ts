export enum USER_ERROR_MESSAGES {
  INVALID_NAME = 'Name must contain at least 5 characters',
  INVALID_BIRTHDAY = 'Birthday cannot be a future date'
}

export enum USER_ERROR_CODES {
  INVALID_NAME_AT_CONSTRUCTOR,
  INVALID_NAME_AT_SETTER,
  INVALID_BIRTHDAY_AT_CONSTRUCTOR,
  INVALID_BIRTHDAY_AT_SETTER
}

export class UserError extends Error {
  code: USER_ERROR_CODES

  constructor(
    message: USER_ERROR_MESSAGES,
    code: USER_ERROR_CODES) {
    super(message)
    this.code = code
  }
}