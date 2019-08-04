import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CheckboxesComponent} from './checkboxes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StateService} from '../../../shared/state.service';

describe('CheckboxesComponent', () => {
  let component: CheckboxesComponent;
  let fixture: ComponentFixture<CheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CheckboxesComponent],
      providers: [StateService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
