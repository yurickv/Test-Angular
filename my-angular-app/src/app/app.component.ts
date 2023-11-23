import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
let inputSymbol = '';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  password = '';

  constructor() {}
  ngOnInit() {
    const passwordInput = document.querySelector('#passwordInput');
    passwordInput?.addEventListener('keyup', (event: Event) => {
      this.password = (event.target as HTMLInputElement).value;
      this.updatePasswordStrength();
    });
  }

  updatePasswordStrength() {
    const passwordStrength = this.getPasswordStrength(this.password);

    const sections = document.querySelectorAll('.section');

    switch (passwordStrength) {
      case 'red':
        removeStyle(sections);
        addStyle(sections, 3, passwordStrength);
        break;

      case 'easy':
        removeStyle(sections);
        addStyle(sections, 1, passwordStrength);
        break;

      case 'medium':
        removeStyle(sections);
        addStyle(sections, 2, passwordStrength);
        break;

      case 'strong':
        removeStyle(sections);
        addStyle(sections, 3, passwordStrength);
        break;

      default:
        removeStyle(sections);
    }
  }

  getPasswordStrength(password: string) {
    const length = password.length;
    const hasNumber = /[0-9]/.test(password);
    const hasLetter = /[а-яА-Яa-zA-Z]/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    if (length && length < 8) {
      return 'red';
    } else if (
      (hasNumber && !hasLetter && !hasSymbol) ||
      (hasLetter && !hasNumber && !hasSymbol) ||
      (hasSymbol && !hasLetter && !hasNumber)
    ) {
      return 'easy';
    } else if (hasNumber && hasLetter && hasSymbol) {
      return 'strong';
    } else if (
      (hasNumber && hasLetter) ||
      (hasNumber && hasSymbol) ||
      (hasLetter && hasSymbol)
    ) {
      return 'medium';
    }
    return '';
  }
}

function removeStyle(sections: any) {
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove('easy', 'medium', 'strong', 'red');
  }
}
function addStyle(sections: any, number: number, style: string) {
  for (let i = 0; i < number; i++) {
    sections[i].classList.add(style);
  }
}
