import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm: FormGroup;
  signupMessage = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  signup() {
    if (this.signupForm.valid) {
      this.http.post<any>('https://recipe-backend-r.onrender.com/users/register', this.signupForm.value)
        .subscribe({
          next: () => {
            this.signupMessage = 'Signup successful';
            setTimeout(() => {
              this.signupMessage = '';
            }, 3000);
            this.signupForm.reset();
          },
          error: (error) => {
            console.error('Error signing up:', error);
            this.signupMessage = 'Signup failed. Please try again.';
          }
        });
    } else {
      this.signupMessage = 'Form is invalid';
      setTimeout(() => {
        this.signupMessage = '';
      }, 3000);
    }
  }

  gotologin() {
    this.router.navigateByUrl('/login');
  }
}