import { Component } from '@angular/core';
import { InputEmailComponent } from '@components/common/input-email/input-email.component';
import { InputPasswordComponent } from "../../common/input-password/input-password.component";


@Component({
  selector: 'app-login-screen',
  imports: [InputEmailComponent, InputPasswordComponent],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css'
})
export class LoginScreenComponent {

}
