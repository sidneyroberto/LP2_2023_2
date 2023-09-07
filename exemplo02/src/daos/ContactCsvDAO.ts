import { Contact } from '../models/Contact'
import { ContactDAO } from './ContactDao'

export class ContactCsvDAO extends ContactDAO {
  constructor() {
    super('contacts.csv')
    const arr = this._strContent.split('\n').slice(1, 101)
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
}
