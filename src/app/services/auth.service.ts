import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>('http://localhost:3000/users/login', credentials);
  }

  logout(): void {
    // Clear session data and update isLoggedIn status
    localStorage.removeItem('user');
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    // Check if the user is logged in
    return this.isLoggedIn;
  }

  setLoggedInStatus(status: boolean): void {
    this.isLoggedIn = status;
  }

}
