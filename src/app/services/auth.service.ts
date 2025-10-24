import { Injectable } from '@angular/core';
import {User} from "../model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mockUsers: User[] = [
    {
      id: 1,
      ime: 'Admin',
      prezime: 'User',
      email: 'admin@raf.rs',
      lozinka: 'admin123',
      dozvole: ['create_user', 'read_user', 'update_user', 'delete_user', 'search_machine']
    },
    {
      id: 2,
      ime: 'Petar',
      prezime: 'Petrović',
      email: 'petar@raf.rs',
      lozinka: 'petar123',
      dozvole: ['search_machine']
    },
    {
      id: 3,
      ime: 'Jovana',
      prezime: 'Jovanovic',
      email: 'jjovanovic@raf.rs',
      lozinka: 'jjovanovic',
      dozvole: ['search_machine', 'activate_machine', 'deactivate_machine']
    }
  ];
  private tokenKey = 'jwt_token';
  private loggedUser?: User;

  login(email: string, password: string) {
    const user = this.mockUsers.find((user) => user.email === email && user.lozinka === password);
    if (user) {
      this.loggedUser = user;
      const fakeToken = btoa(JSON.stringify({ email: user.email, time: new Date() }));
      localStorage.setItem(this.tokenKey, fakeToken);
      localStorage.setItem('loggedUser', JSON.stringify(user));
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem('loggedUser');
    this.loggedUser = undefined;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getCurrentUser(): User | undefined {
    if(!this.loggedUser){
      const userData = localStorage.getItem('loggedUser');
      if (userData) this.loggedUser = JSON.parse(userData);
    }
    return this.loggedUser;
  }

  hasPermission(permission: string): boolean {
    return this.loggedUser?.dozvole.includes(permission) ?? false;
  }

}
