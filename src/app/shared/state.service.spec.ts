import {TestBed} from '@angular/core/testing';

import {StateService} from './state.service';

describe('StateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  test('StateService can be created', () => {
    const stateService: StateService = TestBed.get(StateService);
    expect(stateService).toBeTruthy();
  });

  test('StateService \'leftButtonClicksSubject\' is accessible and can be iterated', () => {
    const stateService: StateService = TestBed.get(StateService);

    expect(stateService.leftButtonClicksSubject.getValue()).toBe(0);
    stateService.leftButtonClicksSubject.next(5);
    expect(stateService.leftButtonClicksSubject.getValue()).toBe(5);
  });

  test('StateService \'rightButtonClicksSubject\' is accessible and can be iterated', () => {
    const stateService: StateService = TestBed.get(StateService);

    expect(stateService.rightButtonClicksSubject.getValue()).toBe(0);
    stateService.rightButtonClicksSubject.next(5);
    expect(stateService.rightButtonClicksSubject.getValue()).toBe(5);
  });

  test('StateService \'formControlValidSubject\' is accessible and can be iterated', () => {
    const stateService: StateService = TestBed.get(StateService);

    expect(stateService.formControlValidSubject.getValue()).toBe(false);
    stateService.formControlValidSubject.next(true);
    expect(stateService.formControlValidSubject.getValue()).toBe(true);
  });

  test('StateService \'formControlValueSubject\' is accessible and can be iterated', () => {
    const stateService: StateService = TestBed.get(StateService);

    expect(stateService.formControlValueSubject.getValue()).toBe('');
    stateService.formControlValueSubject.next('some text');
    expect(stateService.formControlValueSubject.getValue()).toBe('some text');
  });

  test('StateService \'checkBoxValueSubject\' is accessible and can be iterated', () => {
    const stateService: StateService = TestBed.get(StateService);

    expect(stateService.checkBoxValueSubject.getValue()).toBe(false);
    stateService.checkBoxValueSubject.next(true);
    expect(stateService.checkBoxValueSubject.getValue()).toBe(true);
  });

});
