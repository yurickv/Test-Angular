import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { InputComponent } from './input/input.component';
import { PasswordCheckComponent } from './password-check/password-check.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    PasswordCheckComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
