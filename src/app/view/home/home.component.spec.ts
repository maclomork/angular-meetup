import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {FormComponent} from './form/form.component';
import {StateComponent} from './state/state.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CheckboxesComponent} from './checkboxes/checkboxes.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        HomeComponent,
        ButtonsComponent,
        FormComponent,
        CheckboxesComponent,
        StateComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
