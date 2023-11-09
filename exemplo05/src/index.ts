import { Book } from './models/Book'
import { BubbleSort } from './sortalgorithms/BubbleSort'

const books: Book[] = []
let book: Book = {
  mainAuthorName: 'J. R. R. Tolkien',
  title: 'The Two Towers',
  pages: 352,
  publicationYear: 1954
}
books.push(book)

book = {
  mainAuthorName: 'J. R. R. Tolkien',
  title: 'The Return of the King',
  pages: 416,
  publicationYear: 1955
}
books.push(book)

book = {
  mainAuthorName: 'J. R. R. Tolkien',
  title: 'The Fellowship of the Ring',
  pages: 423,
  publicationYear: 1954
}
books.push(book)

const compare = (a: Book, b: Book) => a.title > b.title
const bubble = new BubbleSort(books, compare)
bubble.sort()
console.log(bubble.values)

const compare2 = (a: number, b: number) => a > b
const numbers = [10, -8, 223, 54, 27, 1]
const bubble2 = new BubbleSort(numbers, compare2)
bubble2.sort()
console.log(bubble2.values)