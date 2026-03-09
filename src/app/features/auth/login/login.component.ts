import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthMockService } from '../../../core/services/auth-mock.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthMockService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    this.authService.login(this.f['email'].value, this.f['password'].value)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.error = 'فشل تسجيل الدخول. تأكد من البيانات.';
          this.isLoading = false;
        }
      });
  }
}
