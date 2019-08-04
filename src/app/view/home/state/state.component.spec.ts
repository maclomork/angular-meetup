import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StateComponent} from './state.component';
import {StateService} from '../../../shared/state.service';
import {Subject} from 'rxjs';

class StateServiceMock {
  leftButtonClicksSubject: Subject<number> = new Subject<number>();
  rightButtonClicksSubject: Subject<number> = new Subject<number>();

  formControlValidSubject: Subject<boolean> = new Subject<boolean>();
  formControlValueSubject: Subject<string> = new Subject<string>();

  checkBoxValueSubject: Subject<boolean> = new Subject<boolean>();
}

describe('StateComponent', () => {
  let component: StateComponent;
  let fixture: ComponentFixture<StateComponent>;
  let stateServiceMock: StateServiceMock;

  beforeEach(async(() => {
    stateServiceMock = new StateServiceMock();

    TestBed.configureTestingModule({
      declarations: [StateComponent],
      providers: [{
        provide: StateService,
        useValue: stateServiceMock
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('StateComponent can be created', () => {
    expect(component).toBeTruthy();
  });

  test('StateComponent displays the amount of button clicks', () => {
    const leftBtnClicksElement = fixture.debugElement.nativeElement.querySelector('#left-btn-clicks');
    const rightBtnClicksElement = fixture.debugElement.nativeElement.querySelector('#right-btn-clicks');

    expect(component.leftButtonClicked).toBe(0);
    expect(leftBtnClicksElement.textContent).toEqual('Left Button clicked: 0');
    expect(component.rightButtonClicked).toBe(0);
    expect(rightBtnClicksElement.textContent).toEqual('Right Button clicked: 0');

    stateServiceMock.leftButtonClicksSubject.next(5);
    stateServiceMock.rightButtonClicksSubject.next(15);

    fixture.detectChanges();

    expect(component.leftButtonClicked).toBe(5);
    expect(leftBtnClicksElement.textContent).toEqual('Left Button clicked: 5');
    expect(component.rightButtonClicked).toBe(15);
    expect(rightBtnClicksElement.textContent).toEqual('Right Button clicked: 15');
  });

  test('StateComponent displays the information about input form control', () => {
    const formCtrlValidElement = fixture.debugElement.nativeElement.querySelector('#form-ctrl-valid');
    const formCtrlValueElement = fixture.debugElement.nativeElement.querySelector('#form-ctrl-value');

    expect(component.formControlValid).toBe(false);
    expect(formCtrlValidElement.textContent).toEqual('FormControl valid: false');
    expect(component.formControlValue).toBe('');
    expect(formCtrlValueElement.textContent).toEqual('FormControl value: ');

    stateServiceMock.formControlValidSubject.next(true);
    stateServiceMock.formControlValueSubject.next('some text');

    fixture.detectChanges();

    expect(component.formControlValid).toBe(true);
    expect(formCtrlValidElement.textContent).toEqual('FormControl valid: true');
    expect(component.formControlValue).toBe('some text');
    expect(formCtrlValueElement.textContent).toEqual('FormControl value: some text');
  });

  test('StateComponent displays the checkbox form control value', () => {
    const checkBoxValueElement = fixture.debugElement.nativeElement.querySelector('#checkbox-value');

    expect(component.checkBoxValue).toBe(false);
    expect(checkBoxValueElement.textContent).toEqual('Checkbox Value: false');

    stateServiceMock.checkBoxValueSubject.next(true);

    fixture.detectChanges();

    expect(component.checkBoxValue).toBe(true);
    expect(checkBoxValueElement.textContent).toEqual('Checkbox Value: true');
  });

  test('Iterating the subjects results in correct values displayed', () => {
    stateServiceMock.leftButtonClicksSubject.next(4);
    stateServiceMock.rightButtonClicksSubject.next(12);
    stateServiceMock.formControlValueSubject.next('some text');
    stateServiceMock.formControlValidSubject.next(true);
    stateServiceMock.checkBoxValueSubject.next(true);

    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
