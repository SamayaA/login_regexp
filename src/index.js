export default class Validator {
  validateUsername(login) {
    this.login = login;
    const regexp = /^[A-Za-z]([A-Za-z]*((?<![_-])[_-][A-Za-z]*){0,}(?<!\d\d)\d[A-Za-z]*){0,}[A-Za-z]$/g;
    return regexp.test(this.login);
  }
}
