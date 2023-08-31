import { join } from 'path'
import { Contact } from '../models/Contact'
import { readFileSync } from 'fs'
import { TOTAL } from '../generateContacts'

export class ContactCsvDAO {
  private _contacts: Contact[]

  constructor() {
    const fileName = join(__dirname, '..', 'data', 'contacts.csv')
    const strCsv = readFileSync(fileName, 'utf-8')
    const arr = strCsv.split('\n').slice(1, TOTAL + 1)
    arr.forEach((c) => {
      const values = c.split(',')
      const contact: Contact = {
        name: values[0],
        email: values[1],
        phone: values[2],
      }
      this._contacts.push(contact)
    })
  }

  findContactByEmail(email: string): Contact | undefined {
    const contact = this._contacts.find((c) => c.email === email)
    return contact
  }
}
