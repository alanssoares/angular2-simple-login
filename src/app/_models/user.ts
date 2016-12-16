export class User {
  private id: number;
  private username: string;
  private password: string;
  private firstName: string;
  private lastName: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  getId(): number {
    return this.id;
  }

  getUsername(): string {
    return this.username;
  }

  getFisrtName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }
}
