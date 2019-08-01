import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  leftButtonClicksSubject: BehaviorSubject<number>;
  rightButtonClicksSubject: BehaviorSubject<number>;

  formControlValidSubject: BehaviorSubject<boolean>;
  formControlValueSubject: BehaviorSubject<string>;

  constructor() {
  }
}
