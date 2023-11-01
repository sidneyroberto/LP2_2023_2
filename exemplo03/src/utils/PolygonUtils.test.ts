import { EquilateralTriangle } from '../models/EquilateralTriangle'
import { IPolygon } from '../models/IPolygon'
import { Square } from '../models/Square'
import { PolygonUtils } from './PolygonUtils'

let square: Square
let triangle: EquilateralTriangle

describe('Tests over PolygonUtils', () => {
  beforeAll(() => {
    square = new Square(5)
    triangle = new EquilateralTriangle(5)
  })

  it('should sum areas from 2 polygons correctly', () => {
    const square2 = new Square(4)
    const sum = PolygonUtils.sumAreas(square, triangle, square2)
    expect(Math.floor(sum)).toBe(51)
  })

  it('should sum perimeters from 2 polygons correctly', () => {
    const square2 = new Square(4)
    const polygons: IPolygon[] = [square, triangle, square2]
    const sum = PolygonUtils.sumPerimeters(...polygons)
    expect(sum).toBe(51)
  })
})