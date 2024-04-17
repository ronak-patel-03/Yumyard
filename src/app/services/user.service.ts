// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private users: { name: string, email: string, password: string }[] = [
//     { name: 'User 1', email: 'user1@example.com', password: 'password1' },
//     { name: 'User 2', email: 'user2@example.com', password: 'password2' }
//   ];

//   constructor() { }

//   getUsers(): { name: string, email: string, password: string }[] {
//     return this.users;
//   }

//   addUser(user: { name: string, email: string, password: string }): void {
//     this.users.push(user);
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: { name: string, email: string, password: string }[] = [
    { name: 'User 1', email: 'user1@example.com', password: 'password1' },
    { name: 'User 2', email: 'user2@example.com', password: 'password2' }
  ];

  constructor() { }
  getUserId(): string | null {
    return localStorage.getItem('userId');
  }
  getUsers(): { name: string, email: string, password: string }[] {
    return this.users;
  }

  addUser(user: { name: string, email: string, password: string }): void {
    this.users.push(user);
  }
}