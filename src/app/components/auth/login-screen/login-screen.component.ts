import { Component } from '@angular/core';
import { InputEmailComponent } from "../../common/input-email/input-email.component";

@Component({
  selector: 'app-login-screen',
  imports: [InputEmailComponent],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css'
})
export class LoginScreenComponent {

}
