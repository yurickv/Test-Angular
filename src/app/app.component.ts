import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  passwordStrength: string = '';

  public formGroup = new FormGroup({
    password: new FormControl(''),
  });

  onPasswordStrengthChange(passwordStrength: string) {
    this.passwordStrength = passwordStrength;
    // console.log(passwordStrength);
  }
}
