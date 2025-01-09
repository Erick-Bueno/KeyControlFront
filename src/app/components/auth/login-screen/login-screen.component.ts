import { Component, inject } from '@angular/core';
import { InputEmailComponent } from '@components/common/input-email/input-email.component';
import { InputPasswordComponent } from "../../common/input-password/input-password.component";
import { ButtonAuthComponent } from "../../common/button-auth/button-auth.component";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-login-screen',
  imports: [InputEmailComponent, InputPasswordComponent, ButtonAuthComponent],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css'
})
export class LoginScreenComponent {
  buttonText = "Login"
  store = inject(Store)
  router = inject(Router)
  authentication(){
    const currentUrl = this.router.url;
    if(currentUrl.includes('login')){
      console.log("login")
    }
  }
}
