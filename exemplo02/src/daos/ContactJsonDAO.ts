import { join } from 'path'
import { Contact } from '../models/Contact'
import { readFileSync } from 'fs'

export class ContactJsonDAO {
  private _contacts: Contact[]

  constructor() {
    const fileName = join(__dirname, '..', 'data', 'contacts.json')
    const jsonStr = readFileSync(fileName, 'utf-8')
    const objs: Contact[] = JSON.parse(jsonStr)
    this._contacts = objs
  }

  findContactByEmail(email: string): Contact | undefined {
    const contact = this._contacts.find((c) => c.email === email)
    return contact
  }
}
