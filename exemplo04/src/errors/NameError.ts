export class NameError extends Error {
  constructor() {
    super('Name must contain at least 5 characters')
  }
}