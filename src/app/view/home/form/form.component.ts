import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {FormState} from './ngrx/form.state';
import {Store} from '@ngrx/store';
import {inputFormValidUpdate, inputFormValueUpdate} from './ngrx/form.actions';
import {timer} from 'rxjs';
import {debounce} from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  inputFormControl: FormControl;

  constructor(private store: Store<FormState>,
              private fb: FormBuilder) {

    this.inputFormControl =
      this.fb.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]);
  }

  ngOnInit() {
    this.inputFormControl.valueChanges
      .pipe(debounce(() => timer(250)))
      .subscribe(newValue => {
        this.store.dispatch(inputFormValueUpdate({formValue: newValue}))
      });

    this.inputFormControl.statusChanges
      .pipe(debounce(() => timer(250)))
      .subscribe(newStatus => {
        console.log(newStatus);
        this.store.dispatch(inputFormValidUpdate({formValid: newStatus === 'VALID'}))
      });
  }
}
