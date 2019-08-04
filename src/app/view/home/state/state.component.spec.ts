import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StateComponent} from './state.component';
import {StateService} from '../../../shared/state.service';

describe('StateComponent', () => {
  let component: StateComponent;
  let fixture: ComponentFixture<StateComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [StateComponent],
      providers: [StateService]
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
