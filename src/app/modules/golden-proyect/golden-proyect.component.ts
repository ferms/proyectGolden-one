import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-golden-proyect',
  templateUrl: './golden-proyect.component.html',
  styleUrls: ['./golden-proyect.component.scss']
})
export class GoldenProyectComponent implements OnInit {

  form: FormGroup = new FormGroup({
    productName: new FormControl(''),
    price: new FormControl(''),
    // email: new FormControl(''),
    // password: new FormControl(''),
    // confirmPassword: new FormControl(''),
    // acceptTerms: new FormControl(false),
  });
  submitted = false;
  activeAlert = false;
  isRequired = false;
  isErrors = false;
  isSuccess = false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        productName: [
          null,
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(19)
          ],
        ],
        price: [
          '',
          [
            Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.min(6),
            Validators.max(19),
          ],
        ],

      },

    );


  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.activeAlert = true;

    this.isRequired = false;
    this.isErrors = false;
    this.isSuccess = false;

    setTimeout(() => {
      this.activeAlert = false;
    }, 5000);
    if (this.form.controls['price'].errors || this.form.controls['productName'].errors) {
      if (this.form.controls['price'].errors?.['required'] || this.form.controls['productName'].errors?.['required']) {
        this.isRequired = true;
      } else {
        this.isErrors = true;
      }
    } else {
      this.isSuccess = true;
    }

    if (this.form.invalid) {
      return;
    }


  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}



export default class Validation {
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
}
