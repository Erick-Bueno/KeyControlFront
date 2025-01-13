import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPasswordComponent } from './input-password.component';
import { By } from '@angular/platform-browser';
import { NgControl } from '@angular/forms';



describe('InputPasswordComponent', () => {
  let component: InputPasswordComponent;
  let fixture: ComponentFixture<InputPasswordComponent>;
  let ngControlMock: jasmine.SpyObj<NgControl>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPasswordComponent],
      providers: [{ provide: NgControl, useValue: ngControlMock }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("when click in eye should alter visibility in input password", () => {
    const eyeIcon = fixture.debugElement.query(By.css('.olho'));
    const inputPassword = fixture.debugElement.query(By.css('input.input-password'));

    expect(inputPassword.nativeElement.type).toBe('password');

    eyeIcon.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(inputPassword.nativeElement.type).toBe('text');

    eyeIcon.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(inputPassword.nativeElement.type).toBe('password');
  })
});
