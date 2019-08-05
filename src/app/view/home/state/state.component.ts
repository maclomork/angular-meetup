import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  leftButtonClicked: number;
  rightButtonClicked: number;

  formControlValid: boolean;
  formControlValue: string;

  checkBoxValue: boolean;

  constructor() {
    this.leftButtonClicked = 0;
    this.rightButtonClicked = 0;
    this.formControlValid = false;
    this.formControlValue = '';
    this.checkBoxValue = false;
  }

  ngOnInit() {
    // this.stateService.leftButtonClicksSubject.subscribe(leftBtnClicked => this.leftButtonClicked = leftBtnClicked);
    // this.stateService.rightButtonClicksSubject.subscribe(rightBtnClicked => this.rightButtonClicked = rightBtnClicked);

    // this.stateService.formControlValidSubject.subscribe(formCtrlValid => this.formControlValid = formCtrlValid);
    // this.stateService.formControlValueSubject.subscribe(formCtrlValue => this.formControlValue = formCtrlValue);

    // this.stateService.checkBoxValueSubject.subscribe(checkBoxValue => this.checkBoxValue = checkBoxValue);
  }

}
