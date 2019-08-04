import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StateComponent} from './state.component';
import {StateService} from '../../../shared/state.service';
import {BehaviorSubject} from 'rxjs';

describe('StateComponent', () => {
  let component: StateComponent;
  let fixture: ComponentFixture<StateComponent>;

  beforeEach(async(() => {

    const stateServiceMock = new StateService();
    stateServiceMock.leftButtonClicksSubject = new BehaviorSubject(0);
    stateServiceMock.rightButtonClicksSubject = new BehaviorSubject(1);
    stateServiceMock.formControlValidSubject = new BehaviorSubject(false);
    stateServiceMock.formControlValueSubject = new BehaviorSubject(null);
    stateServiceMock.checkBoxValue = new BehaviorSubject(false);

    TestBed.configureTestingModule({
      declarations: [StateComponent],
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
    fixture = TestBed.createComponent(StateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
