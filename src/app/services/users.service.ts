import { Injectable } from '@angular/core';
import { User } from '../database/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    {
      id: 1,
      username: 'fabagile',
      firstname: 'Fabrice',
      lastname: 'Riquet',
      email: 'fabagile@outlook.fr',
      password: 'Majarade1',
      phone: '06 52 81 29 46',
      address: '3 rue du Rhin',
      addressMoreInfo: 'App 19',
      postalCode: '44470',
      city: 'Carquefou',
      rootUser: true,
      creationDate: new Date('2022-12-05T08:34:38.486Z'),
    },
  ];
  constructor() {}
  addUser(formValue: {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    addressMoreInfo: string;
    postalCode: string;
    city: string;

    requestMessage: string;
  }) {
    const user: User = {
      ...formValue,
      creationDate: new Date(),
      id: this.users[this.users.length - 1].id + 1,
      rootUser: false,
    };
    this.users.push(user);
  }
}
