import { Component, inject } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  imports: [FormsModule],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.css'
})
export class InputPasswordComponent implements ControlValueAccessor {

  value = '';
  showEye = true;
  inputType = "password";
  private ngControl = inject(NgControl)
  constructor(){
    if(this.ngControl){
      this.ngControl.valueAccessor = this;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange?: (value: string) => void = () => { };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched?: () => void = () => { };

  writeValue(obj:string | undefined): void {
    if(obj !== undefined){
      this.value = obj;
    }
  }
  registerOnChange(fn: (value:string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  showPassword() {
    this.showEye = !this.showEye
    if(this.showEye === false){
      this.inputType = 'text'
      return;
    }
    this.inputType = 'password';
  }
}
