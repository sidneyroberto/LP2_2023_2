import { IPolygon } from '../models/IPolygon'

export class PolygonUtils {

  // Utilizando o spread operator
  static sumAreas(...polygons: IPolygon[]): number {
    let sum = 0
    polygons.forEach((p) => sum += p.area())
    return sum
  }

  // Utilizando o spread operator
  static sumPerimeters(...polygons: IPolygon[]): number {
    // Utilizando map/reduce
    return polygons.reduce((sum, p) => sum + p.perimeter(), 0)
  }
}