import { Contact } from '../models/Contact'
import { ContactDAO } from './ContactDao'

export class ContactJsonDAO extends ContactDAO {
  constructor() {
    super('contacts.json')
    const objs: Contact[] = JSON.parse(this._strContent)
    this._contacts = objs
  }
}
