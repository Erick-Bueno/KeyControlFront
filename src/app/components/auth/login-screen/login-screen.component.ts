import { Component, inject } from '@angular/core';
import { InputEmailComponent } from '@components/common/input-email/input-email.component';
import { InputPasswordComponent } from "../../common/input-password/input-password.component";
import { ButtonAuthComponent } from "../../common/button-auth/button-auth.component";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { authActions } from '@states/auth/state/auth.action';
import { loginErrorSelector } from '@states/auth/state/auth.selectors';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login-screen',
  imports: [InputEmailComponent, InputPasswordComponent, ButtonAuthComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css'
})
export class LoginScreenComponent {
  buttonText = "Login"
  private store = inject(Store)
  private router = inject(Router)
  private formBuilder = inject(NonNullableFormBuilder)
  errorMessage$ = this.store.select(loginErrorSelector);
  protected form = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-_@#$%]).{8,}")]]
  })
  submit() {
    const currentUrl = this.router.url;
    if (currentUrl.includes('login')) {
      this.store.dispatch(authActions.login({email: this.form.get("email")?.value ?? "", password: this.form.get("password")?.value ?? ""}))
    }
  }
}