import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthService } from './password-strength.service';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent implements OnInit {
  @Output() passwordStrengthChange = new EventEmitter<string>();
  password: string = '';
  passwordStrength: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  ngOnInit() {
    const passwordInput = document.querySelector('#passwordInput');
    passwordInput?.addEventListener('keyup', (event: Event) => {
      this.password = (event.target as HTMLInputElement).value;
      this.updatePasswordStrength();
    });
  }

  updatePasswordStrength() {
    this.passwordStrength = this.passwordStrengthService.getPasswordStrength(
      this.password
    );
    this.passwordStrengthChange.emit(this.passwordStrength);
    console.log(this.passwordStrength);
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
