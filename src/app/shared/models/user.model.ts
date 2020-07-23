export class User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  registerDate: Date;
  pictureUrl: string;

  constructor(user: User){
    Object.assign(this, user);
  }
}
