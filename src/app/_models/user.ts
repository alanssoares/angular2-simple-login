export class User {
  public id: number;
  public username: string;
  public password: string;
  public firstName: string;
  public lastName: string;

  constructor() {
    this.username = '';
    this.password = '';
    this.firstName = '';
    this.lastName = '';
  }
}
