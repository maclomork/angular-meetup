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
    this.checkBoxFormControl = this.fb.control(false);
  }

  ngOnInit() {
    this.checkBoxFormControl.valueChanges.subscribe(newCheckboxVal => {
      console.log(`[CheckboxesComponent] updating checkBoxValueSubject with value ${newCheckboxVal}`);
      this.stateService.checkBoxValueSubject.next(newCheckboxVal)
    });
  }

}
