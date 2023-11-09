import { Animal } from '../models/Animal'
import { Book } from '../models/Book'
import { Stack } from './Stack'

const stack = new Stack<Animal | Book>()

describe('Tests over Stack class', () => {
  beforeEach(() => {
    stack.clear()
  })

  it('should push values correctly', () => {
    const animal: Animal = {
      habitat: 'jungle',
      popularName: 'Jaguar',
      scientificName: 'Panthera Onca'
    }
    stack.push(animal)

    const book1: Book = {
      mainAuthorName: 'J. R. R. Tolkien',
      title: 'The Two Towers',
      pages: 352,
      publicationYear: 1954
    }
    stack.push(book1)

    const book2: Book = {
      mainAuthorName: 'J. R. R. Tolkien',
      title: 'The Return of the King',
      pages: 416,
      publicationYear: 1955
    }
    stack.push(book2)

    expect(stack.values[0]).toStrictEqual(animal)
    expect(stack.values[1]).toStrictEqual(book1)
    expect(stack.values[2]).toStrictEqual(book2)
  })

  it('should pop values correctly', () => {
    const animal: Animal = {
      habitat: 'jungle',
      popularName: 'Jaguar',
      scientificName: 'Panthera Onca'
    }
    stack.push(animal)

    const book1: Book = {
      mainAuthorName: 'J. R. R. Tolkien',
      title: 'The Two Towers',
      pages: 352,
      publicationYear: 1954
    }
    stack.push(book1)

    const book2: Book = {
      mainAuthorName: 'J. R. R. Tolkien',
      title: 'The Return of the King',
      pages: 416,
      publicationYear: 1955
    }
    stack.push(book2)

    expect(stack.pop()).toStrictEqual(book2)
    expect(stack.pop()).toStrictEqual(book1)
    expect(stack.pop()).toStrictEqual(animal)
    expect(stack.pop()).toStrictEqual(undefined)
  })
})