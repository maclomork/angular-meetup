import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormComponent} from './form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Subject} from 'rxjs';
import {StateService} from '../../../shared/state.service';

class StateServiceMock {
  formControlValidSubject: Subject<boolean> = new Subject<boolean>();
  formControlValueSubject: Subject<string> = new Subject<string>();
}

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let stateServiceMock: StateServiceMock;

  beforeEach(async(() => {
    stateServiceMock = new StateServiceMock();

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FormComponent],
      providers: [
        {
          provide: StateService,
          useValue: stateServiceMock
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('FormComponent can be created', () => {
    expect(component).toBeTruthy();
  });

  test('Changing the input of the form will update the state service', () => {
    const inputFormElement = fixture.debugElement.nativeElement.querySelector('#input-form');
    let formCtrlValid: boolean = false;
    let formCtrlValue: string = '';
    stateServiceMock.formControlValidSubject.subscribe(valid => formCtrlValid = valid);
    stateServiceMock.formControlValueSubject.subscribe(value => formCtrlValue = value);

    expect(component.inputFormControl.valid).toBe(false);
    expect(component.inputFormControl.value).toBe('');

    inputFormElement.value = 'some text';
    inputFormElement.dispatchEvent(new Event('input'));

    expect(component.inputFormControl.valid).toBe(true);
    expect(component.inputFormControl.value).toBe('some text');
    expect(formCtrlValid).toBe(true);
    expect(formCtrlValue).toEqual('some text');
  });

  describe('The text content of the form is checked by its validators', () => {
    test.each`
      textInput           | formControlValid    | formControlValue
      ${'a'}              | ${false}            | ${'a'}
      ${'ab'}             | ${false}            | ${'ab'}
      ${'abc'}            | ${false}            | ${'abc'}
      ${'abcd'}           | ${false}            | ${'abcd'}
      ${'abcde'}          | ${true}             | ${'abcde'}
      ${'abcdefghi'}      | ${true}             | ${'abcdefghi'}
      ${'abcdefghij'}     | ${true}             | ${'abcdefghij'}
      ${'abcdefghijk'}     | ${false}           | ${'abcdefghijk'}
    `('With input=$textInput, FormControl.value=$formControlValue and FormControl.valid=$formControlValid',
      ({textInput, formControlValid, formControlValue}) => {
      component.inputFormControl.patchValue(textInput);
      expect(component.inputFormControl.value).toEqual(formControlValue);
      expect(component.inputFormControl.valid).toEqual(formControlValid);
    })
  });
});
