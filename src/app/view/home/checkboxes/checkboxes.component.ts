import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {CheckBoxesState} from './ngrx/checkboxes.state';
import {Store} from '@ngrx/store';
import {checkBoxValueChange} from './ngrx/checkboxes.actions';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent implements OnInit {

  checkBoxFormControl: FormControl;

  constructor(private store: Store<CheckBoxesState>,
              private fb: FormBuilder) {
    this.checkBoxFormControl = this.fb.control(false);
  }

  ngOnInit() {
    this.checkBoxFormControl.valueChanges.subscribe(
      newCheckBoxValue => this.store.dispatch(checkBoxValueChange({newValue: newCheckBoxValue}))
    );
  }

}
