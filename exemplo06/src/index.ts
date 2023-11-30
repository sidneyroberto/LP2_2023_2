import { join } from 'path'

import { User } from './User'

console.log('Olá!')

export const isAdult = (age: number) => {
  if (age >= 18) {
    return true
  }

  return false
}

export const whatever = (n: number) => {
  if (n === 2) {
    return 1
  } else if (n < 2) {
    return -1
  }

  return 0
}

const obj = { name: 'Fulano', phone: '(99) 99999-9999' }
const { name } = obj
console.log(name)

const path = join(__dirname, '..')
const user = new User('Fulano de Tal', 'fulano@email.com')
console.log(path, user)
