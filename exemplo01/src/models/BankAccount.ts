import { Client } from './Client'

export class BankAccount {
  private _number: string
  branch: string
  private _balance: number
  private _client: Client

  constructor(number: string, branch: string, client: Client) {
    this._number = number
    this.branch = branch
    this._balance = 0
    this._client = client
  }

  deposit(value: number) {
    if (value > 0) {
      //this._balance = this._balance + value
      this._balance += value
    } else {
      console.log('Value must be positive')
    }
  }

  withdraw(value: number) {
    if (value > 0 && value <= this._balance) {
      //this._balance = this._balance - value
      this._balance -= value
    } else {
      console.log('Value must be positive and equal or lower than balance')
    }
  }

  statement() {
    const formatter = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'brl',
    })

    return formatter.format(this._balance)
  }
}
