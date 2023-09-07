import { ContactCsvDAO } from './ContactCsvDAO'

let contactDAO: ContactCsvDAO

describe('Tests over ContactCsvDAO', () => {
  beforeAll(() => {
    contactDAO = new ContactCsvDAO()
  })

  it('should retrieve a contact by its email', () => {
    const contact = contactDAO.findContactByEmail('Sara.Moreira90@hotmail.com')
    expect(contact?.name).toBe('Sara Moreira')
    expect(contact?.phone).toBe('(36) 23539-2327')
  })
})
