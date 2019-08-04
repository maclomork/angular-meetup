import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CheckboxesComponent} from './checkboxes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StateService} from '../../../shared/state.service';
import {Subject} from 'rxjs';

class StateServiceMock {
  checkBoxValueSubject: Subject<boolean> = new Subject<boolean>();
}

describe('CheckboxesComponent', () => {
  let component: CheckboxesComponent;
  let fixture: ComponentFixture<CheckboxesComponent>;
  let stateServiceMock: StateServiceMock;

  beforeEach(async(() => {
    stateServiceMock = new StateServiceMock();

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CheckboxesComponent],
      providers: [{
        provide: StateService,
        useValue: stateServiceMock
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('CheckboxesComponent can be created', () => {
    expect(component).toBeTruthy();
  });

  test('Clicking the checkbox will change the subject value in StateService', () => {
    let checkBoxSubjectValue: boolean = false;
    stateServiceMock.checkBoxValueSubject.subscribe(subjectValue => checkBoxSubjectValue = subjectValue);

    const checkbox = fixture.debugElement.nativeElement.querySelector('#checkbox');

    checkbox.click();
    expect(component.checkBoxFormControl.value).toBe(true);
    expect(checkBoxSubjectValue).toBe(true);

    checkbox.click();
    expect(component.checkBoxFormControl.value).toBe(false);
    expect(checkBoxSubjectValue).toBe(false);
  });

});
