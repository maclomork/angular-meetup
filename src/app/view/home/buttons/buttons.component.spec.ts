import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonsComponent} from './buttons.component';
import {Subject} from 'rxjs';
import {StateService} from '../../../shared/state.service';

class StateServiceMock {
  leftButtonClicksSubject: Subject<number> = new Subject<number>();
  rightButtonClicksSubject: Subject<number> = new Subject<number>();
}

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;
  let stateServiceMock: StateServiceMock;

  beforeEach(async(() => {
    stateServiceMock = new StateServiceMock();

    TestBed.configureTestingModule({
      declarations: [ButtonsComponent],
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
    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('ButtonsComponent can be created', () => {
    expect(component).toBeTruthy();
  });

  test('ButtonClick amount (left button) is propagated to the StateService', () => {
    let leftClicks: number = 0;
    stateServiceMock.leftButtonClicksSubject.subscribe(
      clickAmounts => leftClicks = clickAmounts
    );

    let rightClicks: number = 0;
    stateServiceMock.rightButtonClicksSubject.subscribe(
      clickAmounts => rightClicks = clickAmounts
    );

    component.clickButton('left');
    expect(leftClicks).toBe(1);

    component.clickButton('left');
    expect(leftClicks).toBe(2);

    component.clickButton('left');
    expect(leftClicks).toBe(3);

    expect(rightClicks).toBe(0);
  });

  test('ButtonClick amount (right button) is propagated to the StateService', () => {
    let rightClicks: number = 0;
    stateServiceMock.rightButtonClicksSubject.subscribe(
      clickAmounts => rightClicks = clickAmounts
    );

    let leftClicks: number = 0;
    stateServiceMock.leftButtonClicksSubject.subscribe(
      clickAmounts => leftClicks = clickAmounts
    );

    component.clickButton('right');
    expect(rightClicks).toBe(1);

    component.clickButton('right');
    expect(rightClicks).toBe(2);

    component.clickButton('right');
    expect(rightClicks).toBe(3);

    expect(leftClicks).toBe(0);
  });
});
