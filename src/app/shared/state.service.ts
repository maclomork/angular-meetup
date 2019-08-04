import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  leftButtonClicksSubject: BehaviorSubject<number>;
  rightButtonClicksSubject: BehaviorSubject<number>;

  formControlValidSubject: BehaviorSubject<boolean>;
  formControlValueSubject: BehaviorSubject<string>;

  checkBoxValue: BehaviorSubject<boolean>;

  constructor() {
    this.leftButtonClicksSubject = new BehaviorSubject<number>(null);
    this.rightButtonClicksSubject = new BehaviorSubject<number>(null);
    this.formControlValidSubject = new BehaviorSubject<boolean>(null);
    this.formControlValueSubject = new BehaviorSubject<string>(null);
    this.checkBoxValue = new BehaviorSubject<boolean>(null);
  }
}
