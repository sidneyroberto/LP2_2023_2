export class BirthdayError extends Error {
  constructor() {
    super('Birthday cannot be a future date')
  }
}