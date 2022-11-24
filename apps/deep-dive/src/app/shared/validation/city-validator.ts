import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateCity(control: AbstractControl): ValidationErrors | null {
  const allowedCities = [
    'Graz', 'Hamburg', 'Berlin'
  ];

  if (!allowedCities.includes(control.value)) {
    return {
      city: {
        allowedCities,
        actualValue: control.value
      }
    }
  }

  return null;
}

export function validateCityWithParams(allowedCities: string[]): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    if (!allowedCities.includes(control.value)) {
      return {
        city: {
          allowedCities,
          actualValue: control.value
        }
      }
    }

    return null;
  }
}



