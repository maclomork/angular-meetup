import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent implements OnInit {

  checkBoxFormControl: FormControl;

  constructor(private fb: FormBuilder) {
    this.checkBoxFormControl = this.fb.control(false);
  }

  ngOnInit() {
    this.checkBoxFormControl.valueChanges.subscribe(
      // newCheckboxVal => this.stateService.checkBoxValueSubject.next(newCheckboxVal)
    );
  }

}
