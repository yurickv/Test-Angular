import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';
  strength: string = '';

  calculateStrength() {
    // Implement the password strength logic here
    // Update this.strength accordingly
  }
}
