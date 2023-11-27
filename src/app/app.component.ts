import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './input/input.component';
import { PasswordCheckComponent } from './password-check/password-check.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputComponent, PasswordCheckComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  passwordStrength: string = '';

  onPasswordStrengthChange(passwordStrength: string) {
    this.passwordStrength = passwordStrength;
  }
}
