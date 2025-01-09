import { Component, input } from '@angular/core';


@Component({
  selector: 'app-button-auth',
  imports: [],
  templateUrl: './button-auth.component.html',
  styleUrl: './button-auth.component.css'
})
export class ButtonAuthComponent {
  buttonText = input.required<string>();
}
