// src/app/flight-booking/flight-edit/flight-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  editForm = this.fb.nonNullable.group({
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
    date: [new Date().toISOString()]
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
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }
}
