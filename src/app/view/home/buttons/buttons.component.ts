import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  leftButtonClickedAmount: number;
  rightButtonClickedAmount: number;

  constructor() {
    this.leftButtonClickedAmount = 0;
    this.rightButtonClickedAmount = 0;
  }

  ngOnInit() {
    // this.stateService.leftButtonClicksSubject.next(this.leftButtonClickedAmount);
    // this.stateService.rightButtonClicksSubject.next(this.rightButtonClickedAmount);
  }

  clickButton(identifier: string) {
    if (identifier === 'left') {
      this.leftButtonClickedAmount += 1;
      // this.stateService.leftButtonClicksSubject.next(this.leftButtonClickedAmount);

    } else if (identifier === 'right') {
      this.rightButtonClickedAmount += 1;
      // this.stateService.rightButtonClicksSubject.next(this.rightButtonClickedAmount);
    }
  }
}
