import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  constructor() {}

  getPasswordStrength(password: string): string {
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