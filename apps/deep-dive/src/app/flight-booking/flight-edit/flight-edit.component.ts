// src/app/flight-booking/flight-edit/flight-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Address } from '../../shared/controls/address/address.component';
import { validateCity, validateCityWithParams } from '../../shared/validation/city-validator';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {

  id = 0;
  showDetails = false;

  // customForm: FormGroup<>;

  editForm: FormGroup<{
    id: FormControl<number>,
    from: FormControl<string>,
    to: FormControl<string>,
    date: FormControl<string>,
    address: FormControl<Address>
  }> = this.fb.nonNullable.group({
    id: [0],
    from: ['Graz', [
      Validators.required,
      validateCity
    ]],
    to: ['Hamburg', [
      Validators.required,
      validateCityWithParams([
        'Hamburg', 'Wien', 'London'
      ])
    ]],
    date: [new Date().toISOString()],
    address: [{
      street: 'Main Street',
      number: '102/6/3',
      zip: '1234567CD',
      city: 'Gotham City',
      country: 'USA'
    }]
  }, { updateOn: 'change' });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder) {

    this.editForm.valueChanges.subscribe(
      console.log
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }

  save(): void {
    console.log('value (w/o disabled)', this.editForm.value);
    console.log('value (all props)', this.editForm.getRawValue());
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }
}
