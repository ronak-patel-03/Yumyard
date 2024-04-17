//src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    username: '',
    email:'',
    password: ''
  };
  loginMessage = ''; 

  constructor(
    private userService: UserService, 
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      const requestData = {
        ...(this.loginData.username ? { username: this.loginData.username } : {}),
        ...(this.loginData.email ? { email: this.loginData.email } : {}),
        password: this.loginData.password
      };
  
      this.http.post<any>('https://recipe-backend-r.onrender.com/users/login', requestData)
        .subscribe(
          response => {
            this.loginMessage = response.message;
            if (response.message === 'Login successful') {
              this.router.navigateByUrl('/home');
            }
          },
          error => {
            console.error('Error logging in user:', error);
            this.loginMessage = 'Failed to login';
          }
        );
    } else {
      this.loginMessage = 'Form is invalid';
      setTimeout(() => {
        this.loginMessage = '';
      }, 2000);
    }
  }
  

  gotoregister(){
    this.router.navigateByUrl('/register');
  }
}