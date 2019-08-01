import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { StateService } from '../../../shared/state.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  inputFormControl: FormControl;

  constructor(private stateService: StateService) {
    this.inputFormControl = new FormControl('', [Validators.minLength(5), Validators.maxLength(10)]);
  }

  ngOnInit() {
    this.stateService.formControlValidSubject = new BehaviorSubject<boolean>(this.inputFormControl.valid);
    this.stateService.formControlValueSubject = new BehaviorSubject<string>(this.inputFormControl.value);

    this.inputFormControl.valueChanges.subscribe(newValue => {
      this.stateService.formControlValidSubject.next(this.inputFormControl.valid);
      this.stateService.formControlValueSubject.next(newValue);
    });
  }
}
