export class Queue<T> {
  private _values: T[]

  constructor() {
    this._values = []
  }

  enqueue(newValue: T): void {
    this._values.push(newValue)
  }

  dequeue(): T | undefined {
    if (this._values.length > 0) {
      const value = this._values[0]
      this._values = this._values.slice(1, this._values.length)
      return value
    }

    return undefined
  }

  clear(): void {
    this._values = []
  }

  get values() {
    return this._values
  }
}