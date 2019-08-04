import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {StateService} from '../../../shared/state.service';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent implements OnInit {

  checkBoxFormControl: FormControl;

  constructor(private stateService: StateService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.checkBoxFormControl = this.fb.control(false);
    this.stateService.checkBoxValue.next(this.checkBoxFormControl.value);

    this.checkBoxFormControl.valueChanges.subscribe(newCheckboxVal => this.stateService.checkBoxValue.next(newCheckboxVal));
  }

}
