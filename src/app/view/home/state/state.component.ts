import {Component, OnInit} from '@angular/core';
import {AppState} from '../../../ngrx-state/app.state';
import {select, Store} from '@ngrx/store';
import {selectLeftButtonClicks, selectRightButtonClicks} from '../buttons/ngrx/buttons.selectors';
import {Observable} from 'rxjs';
import {selectFormValid, selectFormValue} from '../form/ngrx/form.selectors';
import {selectCheckboxes} from '../checkboxes/ngrx/checkboxes.selectors';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  leftButtonClicked$: Observable<number>;
  rightButtonClicked$: Observable<number>;

  formControlValid$: Observable<boolean>;
  formControlValue$: Observable<string>;

  checkBoxValue$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.leftButtonClicked$ = this.store.pipe(select(selectLeftButtonClicks));
    this.rightButtonClicked$ = this.store.pipe(select(selectRightButtonClicks));
    this.formControlValid$ = this.store.pipe(select(selectFormValid));
    this.formControlValue$ = this.store.pipe(select(selectFormValue));
    this.checkBoxValue$ = this.store.pipe(select(selectCheckboxes));
  }

  ngOnInit() {
  }

}
