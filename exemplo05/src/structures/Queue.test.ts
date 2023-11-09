import { Queue } from './Queue'
import { Book } from '../models/Book'
import { Animal } from '../models/Animal'

const queue = new Queue<Book | Animal>()

describe('Tests over Queue class', () => {
  beforeEach(() => {
    queue.clear()
  })

  it('should enqueue values correctly', () => {
    const animal: Animal = {
      habitat: 'jungle',
      popularName: 'Jaguar',
      scientificName: 'Panthera Onca'
    }
    queue.enqueue(animal)

    const book1: Book = {
      mainAuthorName: 'J. R. R. Tolkien',
      title: 'The Two Towers',
      pages: 352,
      publicationYear: 1954
    }
    queue.enqueue(book1)

    const book2: Book = {
      mainAuthorName: 'J. R. R. Tolkien',
      title: 'The Return of the King',
      pages: 416,
      publicationYear: 1955
    }
    queue.enqueue(book2)

    expect(queue.values[0]).toStrictEqual(animal)
    expect(queue.values[1]).toStrictEqual(book1)
    expect(queue.values[2]).toStrictEqual(book2)
  })

  it('should dequeue values correctly', () => {
    const animal: Animal = {
      habitat: 'jungle',
      popularName: 'Jaguar',
      scientificName: 'Panthera Onca'
    }
    queue.enqueue(animal)

    const book1: Book = {
      mainAuthorName: 'J. R. R. Tolkien',
      title: 'The Two Towers',
      pages: 352,
      publicationYear: 1954
    }
    queue.enqueue(book1)

    const book2: Book = {
      mainAuthorName: 'J. R. R. Tolkien',
      title: 'The Return of the King',
      pages: 416,
      publicationYear: 1955
    }
    queue.enqueue(book2)

    expect(queue.dequeue()).toStrictEqual(animal)
    expect(queue.dequeue()).toStrictEqual(book1)
    expect(queue.dequeue()).toStrictEqual(book2)
    expect(queue.dequeue()).toBe(undefined)
  })
})