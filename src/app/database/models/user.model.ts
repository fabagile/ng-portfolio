export class User {
  id!: number;
  username!: string;
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;
  phone!: string;
  address!: string;
  addressMoreInfo!: string;
  postalCode!: string;
  city!: string;
  rootUser?: boolean;
  creationDate!: Date;
}
