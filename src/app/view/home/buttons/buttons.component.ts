import {Component, OnInit} from '@angular/core';
import {StateService} from '../../../shared/state.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  leftButtonClickedAmount: number;
  rightButtonClickedAmount: number;

  constructor(private stateService: StateService) {
    this.leftButtonClickedAmount = 0;
    this.rightButtonClickedAmount = 0;
  }

  ngOnInit() {
    this.stateService.leftButtonClicksSubject.next(this.leftButtonClickedAmount);
    this.stateService.rightButtonClicksSubject.next(this.rightButtonClickedAmount);
  }

  clickButton(identifier: string) {
    if (identifier === 'left') {
      this.leftButtonClickedAmount += 1;
      console.log(`[ButtonsComponent] updating leftButtonClicksSubject with value ${this.leftButtonClickedAmount}`);
      this.stateService.leftButtonClicksSubject.next(this.leftButtonClickedAmount);

    } else if (identifier === 'right') {
      this.rightButtonClickedAmount += 1;
      console.log(`[ButtonsComponent] updating rightButtonClicksSubject with value ${this.rightButtonClickedAmount}`);
      this.stateService.rightButtonClicksSubject.next(this.rightButtonClickedAmount);
    }
  }
}
