import {Component, OnInit} from '@angular/core';
import {ButtonState} from './ngrx/buttons.state';
import {Store} from '@ngrx/store';
import {leftButtonClicked, rightButtonClicked} from './ngrx/buttons.actions';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  leftButtonClickedAmount: number;
  rightButtonClickedAmount: number;

  constructor(private store: Store<ButtonState>) {
    this.leftButtonClickedAmount = 0;
    this.rightButtonClickedAmount = 0;
  }

  ngOnInit() {
  }

  clickButton(identifier: string) {
    if (identifier === 'left') {
      this.leftButtonClickedAmount += 1;
      this.store.dispatch(leftButtonClicked());

    } else if (identifier === 'right') {
      this.rightButtonClickedAmount += 1;
      this.store.dispatch(rightButtonClicked());
    }
  }
}
