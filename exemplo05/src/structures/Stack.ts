// Vamos utilizar o tipo genérico (generics) T aqui
export class Stack<T> {
  private _values: T[]

  constructor() {
    this._values = []
  }

  push(newValue: T): void {
    this._values.push(newValue)
  }

  pop(): T | undefined {
    return this._values.pop()
  }

  clear(): void {
    this._values = []
  }

  get values() {
    return this._values
  }
}