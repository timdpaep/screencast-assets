import { Person } from './interfaces';

export class Actor implements Person {
  name: string;
  age?: number;
}