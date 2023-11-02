import { BirthdayError } from '../errors/BirthdayError'
import { NameError } from '../errors/NameError'
import { USER_ERROR_CODES, USER_ERROR_MESSAGES, UserError } from '../errors/UserError'
import { User } from './User'

describe('Tests over User model', () => {
  it('should not allow instatiation of a user with invalid name', () => {
    const run = () => {
      new User('Zé', new Date('1990-10-08'))
    }

    expect(run).toThrow(UserError)
    expect(run).toThrow(USER_ERROR_MESSAGES.INVALID_NAME)
  })

  it('should not allow instantiation of a user with invalid birthday', () => {
    const run = () => {
      new User('José da Silva', new Date('2027-01-09'))
    }

    expect(run).toThrow(UserError)
    expect(run).toThrow(USER_ERROR_MESSAGES.INVALID_BIRTHDAY)
  })

  it('should not allow update a user with invalid name', () => {
    try {
      new User('Zé', new Date('1990-10-08'))
    } catch (err) {
      expect(err).toBeInstanceOf(UserError)
      const { code, message } = err
      expect(code).toBe(USER_ERROR_CODES.INVALID_NAME_AT_CONSTRUCTOR)
      expect(message).toBe(USER_ERROR_MESSAGES.INVALID_NAME)
    }
  })
})