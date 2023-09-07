import { join } from 'path'
import { Contact } from '../models/Contact'
import { readFileSync } from 'fs'

export class ContactDAO {
  protected _contacts: Contact[]
  protected _strContent: string

  constructor(filename: string) {
    const fileName = join(__dirname, '..', 'data', filename)
    this._strContent = readFileSync(fileName, 'utf-8')
    this._contacts = []
  }

  findContactByEmail(email: string): Contact | undefined {
    const contact = this._contacts.find((c) => c.email === email)
    return contact
  }
}
