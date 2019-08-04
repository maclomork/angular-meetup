import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {StateService} from '../../../shared/state.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  inputFormControl: FormControl;

  constructor(private stateService: StateService,
              private fb: FormBuilder) {
    this.inputFormControl =
      this.fb.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)]);
  }

  ngOnInit() {
    this.stateService.formControlValidSubject.next(this.inputFormControl.valid);
    this.stateService.formControlValueSubject.next(this.inputFormControl.value);

    this.inputFormControl.valueChanges.subscribe(newValue => {
      this.stateService.formControlValidSubject.next(this.inputFormControl.valid);
      this.stateService.formControlValueSubject.next(newValue);
    });
  }
}
