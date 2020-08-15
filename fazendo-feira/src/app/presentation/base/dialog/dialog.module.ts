import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MaterialModule } from '../../../material/material.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class DialogModule { }
