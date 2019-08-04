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

  checkBoxValueSubject: BehaviorSubject<boolean>;

  constructor() {
    this.leftButtonClicksSubject = new BehaviorSubject<number>(0);
    this.rightButtonClicksSubject = new BehaviorSubject<number>(0);
    this.formControlValidSubject = new BehaviorSubject<boolean>(false);
    this.formControlValueSubject = new BehaviorSubject<string>('');
    this.checkBoxValueSubject = new BehaviorSubject<boolean>(false);
  }
}
