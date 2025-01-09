import { Component, inject } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-email',
  imports: [FormsModule],
  templateUrl: './input-email.component.html',
  styleUrl: './input-email.component.css',
})
export class InputEmailComponent implements  ControlValueAccessor {
  value = '';

  private ngControl = inject(NgControl, {optional:true});
  protected onTouched?: () => void;
  protected onChange?: (value:string) => void;


  constructor(){
    if(this.ngControl){
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(obj: string | undefined): void {
    if (obj !== undefined) {
      this.value = obj;
    }
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

}
