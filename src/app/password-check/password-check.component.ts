import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-check.component.html',
  styleUrl: './password-check.component.css',
})
export class PasswordCheckComponent {
  @Input() passwordStrength: string = '';

  constructor() {}
}
