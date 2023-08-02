import { Contact } from './models/Contact'

const sum = (a: number, b: number) => {
  return a + b
}

const n1: number = 5
// n2 é do tipo number por inferência
const n2 = 6
console.log(sum(n1, n2))

const str1 = 'Oi'
const str2 = ' galerinha'
// A linha abaixo causa um erro
//console.log(sum(str1, str2))

const c1: Contact = {
  name: 'Sidney Sousa',
  phone: '(99) 99999-99999',
}
console.log(c1.name)
const { name } = c1
console.log(name)

const decimal = -1
if (decimal) {
  console.log('decimal tem valor')
}
const binary = 0b10
console.log(binary)
const hex = 0xf
console.log(hex)
/*const big: bigint = 19828923876234823487234675234n
console.log(big)*/

const arr1: number[] = [1, 2, 4, 56, 86, -3, 5]
const arr2: Array<number> = [12, -6, 12, 123]
const arr3 = []

// Criando uma Tupla
const t1: [string, number] = ['LPs', 4]
const t2: [string, string] = ['orange', 'laranja']
const cep1: [string, string] = ['79200-000', 'Aquidauana']
let ceps: [string, string]
ceps = ['79200-000', 'Aquidauana']
