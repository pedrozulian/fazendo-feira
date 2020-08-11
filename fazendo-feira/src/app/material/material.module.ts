import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const material = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
