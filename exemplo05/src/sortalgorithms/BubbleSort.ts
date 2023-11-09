export class BubbleSort<T> {
  private _values: T[]
  private _comparisonFunction: (a: T, b: T) => boolean

  constructor(
    values: T[],
    comparisonFunction: (a: T, b: T) => boolean
  ) {
    this._values = values
    this._comparisonFunction = comparisonFunction
  }

  sort() {
    for (var i = 0; i < this._values.length; i++) {
      for (var j = 0; j < (this._values.length - i - 1); j++) {
        if (this._comparisonFunction(
          this._values[j], this._values[j + 1]
        )) {
          var temp = this._values[j]
          this._values[j] = this._values[j + 1]
          this._values[j + 1] = temp
        }
      }
    }
  }

  get values() {
    return this._values
  }

}