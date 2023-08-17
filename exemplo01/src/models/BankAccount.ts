import { Client } from './Client'

export class BankAccount {
  private _number: string
  private _branch: string
  private _balance: number
  private _client: Client

  constructor(number: string, branch: string, client: Client) {
    this._number = this._validateNumber(number) ? number : '00000-0'
    this._branch = this._validateBranch(branch) ? branch : '000-0'
    this._balance = 0
    this._client = client
  }

  /**
   * Cria um novo objeto de conta bancária
   * @param branch Número da agência
   * @param client Cliente dono da conta
   * @param number Número da conta
   */
  // constructor(branch: string, client: Client, number?: string) {
  //   if (number && this._validateNumber(number)) {
  //     this.number = number
  //   }
  //   this.number = '00000-0'
  //   this.branch = this._validateBranch(branch) ? branch : '000-0'
  //   this._balance = 0
  //   this._client = client
  // }

  get branch() {
    return this._branch
  }

  set branch(newValue: string) {
    // const regex = /^\d{3}-\d{1}$/
    // if(regex.test(newValue)) {

    // }
    /************************************/
    // if(/^\d{3}-\d{1}$/.test(newValue)) {

    // }
    /************************************/
    // if (newValue.match(/^\d{3}-\d{1}$/)) {
    //   this._branch = newValue
    // } else {
    //   console.log('Invalid branch value')
    // }
    if (this._validateBranch(newValue)) {
      this._branch = newValue
    } else {
      console.log('Invalid branch value')
    }
  }

  /**
   * Valida se o número da agência corresponde ao padrão 000-0.
   * @param branch Número de agência a ser validado
   * @returns true caso o número seja válido; false c.c.
   */
  private _validateBranch(branch: string): boolean {
    const regex = /^\d{3}-\d{1}$/
    return regex.test(branch)
  }

  get number() {
    return this._number
  }

  set number(newValue: string) {
    if (this._validateNumber(newValue)) {
      this._number = newValue
    } else {
      console.log('Invalid number value')
    }
  }

  private _validateNumber(number: string) {
    const regex = /^\d{5}-\d{1}$/
    return regex.test(number)
  }

  deposit(value: number) {
    if (value > 0) {
      //this._balance = this._balance + value
      this._balance += value
    } else {
      console.log('Value must be positive')
    }
  }

  withdraw(value: number): void {
    if (value > 0 && value <= this._balance) {
      //this._balance = this._balance - value
      this._balance -= value
    } else {
      console.log('Value must be positive and equal or lower than balance')
    }
  }

  statement(): string {
    const formatter = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'brl',
    })

    return formatter.format(this._balance)
  }
}
