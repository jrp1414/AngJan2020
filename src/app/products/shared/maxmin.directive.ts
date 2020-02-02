import { Directive, Input, OnInit } from '@angular/core';
import { ValidatorFn, Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[MaxMin]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MaxminDirective, multi: true }
  ]
})
export class MaxminDirective implements Validator {
  @Input("MaxMin") MaxMin: any;
  validate(control: AbstractControl): ValidationErrors {
    if (control.value > this.MaxMin.max) {
      return {max:true};
    }
    if (control.value < this.MaxMin.min) {
      return {min:true};
    }
    return null;
  }
}
