// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Added by the CLI
import { CityValidationDirective } from './validation/city-validation.directive';
import { AddressComponent } from './controls/address/address.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,

    // Added by the CLI
    CityValidationDirective,
    AddressComponent,
  ],
  exports: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    FormsModule,
    CommonModule,

    // New definition
    CityValidationDirective,
    AddressComponent,
  ],
})
export class SharedModule {}
