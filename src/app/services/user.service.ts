import { Injectable } from '@angular/core';
import {User} from "../model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { id: 1, ime: 'Admin', prezime: 'User', email: 'admin@raf.rs', dozvole: ['create_user', 'read_user'] },
    { id: 2, ime: 'Mila', prezime: 'Jovanović', email: 'mila@raf.rs', dozvole: ['search_machine'] },
    { id: 2, ime: 'Marko', prezime: 'Markovic', email: 'marko@raf.rs', dozvole: ['search_machine'] },
    { id: 2, ime: 'Stefan', prezime: 'Stefanovic', email: 'stefan@raf.rs', dozvole: ['search_machine'] }
  ];

  getAll(): User[] {
    return this.users;
  }

  add(user: User): void {
    this.users.push({ ...user, id: Date.now() });
  }

  update(user: User): void {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) this.users[index] = user;
  }

  delete(id: number): void {
    this.users = this.users.filter(u => u.id !== id);
  }
  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
