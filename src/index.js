export default class Validator {
  validateUsername(login) {
    this.login = login;
    // starts and end with letter
    const regexp1 = /^[a-zA-Z][a-zA-Z0-9\-_]*[a-zA-Z]$/;
    // 3 digits in a row or have two -_ in a row
    const regexp2 = /((\d\d\d)|([-_]+[-_]+))/;
    // have only one letter
    const regexp3 = /^[a-zA-Z]$/;
    const result = ((regexp1.test(this.login)
      && !(regexp2.test(this.login)))
      || (regexp3.test(this.login)));
    return result;
  }
}
