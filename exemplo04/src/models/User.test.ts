import { BirthdayError } from '../errors/BirthdayError'
import { NameError } from '../errors/NameError'
import { User } from './User'

describe('Tests over User model', () => {
  it('should not allow instatiation of a user with invalid name', () => {
    const run = () => {
      new User('Zé', new Date('1990-10-08'))
    }

    expect(run).toThrow(NameError)
  })

  it('should not allow instantiation of a user with invalid birthday', () => {
    const run = () => {
      new User('José da Silva', new Date('2027-01-09'))
    }

    expect(run).toThrow(BirthdayError)
  })
})