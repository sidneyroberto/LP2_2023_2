import { BankAccount } from './BankAccount'
import { Client } from './Client'

let account: BankAccount
let client: Client
let formatter: Intl.NumberFormat

describe('Tests over bank account use cases', () => {
  beforeAll(() => {
    formatter = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'brl',
    })
  })

  beforeEach(() => {
    client = new Client('999.999.999-99', 'Fulano de Tal')
    account = new BankAccount('12345-6', '123-4', client)
  })

  it('should have 0 balance when account is created', () => {
    const expectedBalance = formatter.format(0)
    const balance = account.statement()
    expect(balance).toBe(expectedBalance)
  })

  it('should have correct balance after a deposit', () => {
    const value = 150
    account.deposit(value)
    const expectedBalance = formatter.format(value)
    const balance = account.statement()
    expect(balance).toBe(expectedBalance)
  })

  it('should not allow a negative deposit', () => {
    const value = -150
    account.deposit(value)
    const expectedBalance = formatter.format(0)
    const balance = account.statement()
    expect(balance).toBe(expectedBalance)
  })

  it('should allow an withdraw when there is available balance', () => {
    const depositValue = 200
    account.deposit(depositValue)
    const withdrawValue = 140
    account.withdraw(withdrawValue)
    const expectedBalance = formatter.format(depositValue - withdrawValue)
    const balance = account.statement()
    expect(balance).toBe(expectedBalance)
  })

  it('should not allow an withdraw when there is no available balance', () => {
    const withdrawValue = 400
    account.withdraw(withdrawValue)
    const expectedBalance = formatter.format(0)
    const balance = account.statement()
    expect(balance).toBe(expectedBalance)
  })
})
