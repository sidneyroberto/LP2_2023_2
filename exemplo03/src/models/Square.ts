import { IPolygon } from './IPolygon'

export class Square implements IPolygon {
  private size: number

  constructor(size: number) {
    this.size = size
  }

  area(): number {
    return this.size * this.size
  }

  perimeter(): number {
    return this.size * 4
  }
}