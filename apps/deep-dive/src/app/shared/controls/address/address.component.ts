import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NgControl } from '@angular/forms';


export interface Address {
  street: string;
  number: string;
  zip: string;
  city: string;
  country: string;
}


@Component({
  selector: 'address-control',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit, ControlValueAccessor {
  addressForm = this.fb.nonNullable.group({
    street: [''],
    number: [''],
    zip: [''],
    city: [''],
    country: [''],
  });

  onChangesFn: ((address: Address) => void) | undefined;

  constructor(
    private fb: FormBuilder,
    private ngControl: NgControl
  ) {

    this.ngControl.valueAccessor = this;
  }

  updateAddress(): void {
    this.onChangesFn?.(this.addressForm.getRawValue())
  }

  writeValue(address: Address): void {
    this.addressForm.patchValue(address);
  }

  registerOnChange(fn: (address: Address) => void): void {
    this.onChangesFn = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  ngOnInit(): void {}
}
