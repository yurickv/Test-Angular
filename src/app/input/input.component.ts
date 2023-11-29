import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthService } from './password-strength.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent implements ControlValueAccessor {
  @Output() passwordStrengthChange = new EventEmitter<string>();

  passwordStrength: string = '';

  public value: string | undefined;

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  public onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;

    this.onChange(value);
    this.updatePasswordStrength(value);
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  updatePasswordStrength(value) {
    this.passwordStrength =
      this.passwordStrengthService.getPasswordStrength(value);
    this.passwordStrengthChange.emit(this.passwordStrength);
  }
}

//Стара логіка зміни стилів на ванільному js

// function removeStyle(sections: any) {
//   for (let i = 0; i < sections.length; i++) {
//     sections[i].classList.remove('easy', 'medium', 'strong', 'red');
//   }
// }
// function addStyle(sections: any, number: number, style: string) {
//   for (let i = 0; i < number; i++) {
//     sections[i].classList.add(style);
//   }
// }

// const sections = document.querySelectorAll('.section');

// switch (passwordStrength) {
//   case 'red':
//     removeStyle(sections);
//     addStyle(sections, 3, passwordStrength);
//     break;

//   case 'easy':
//     removeStyle(sections);
//     addStyle(sections, 1, passwordStrength);
//     break;

//   case 'medium':
//     removeStyle(sections);
//     addStyle(sections, 2, passwordStrength);
//     break;

//   case 'strong':
//     removeStyle(sections);
//     addStyle(sections, 3, passwordStrength);
//     break;

//   default:
//     removeStyle(sections);
// }
