import {Action, createReducer, on} from '@ngrx/store';
import * as FormCompActions from './form.actions';
import {FormState, initialFormState} from './form.state';

const formReducer = createReducer(
  initialFormState,

  on(FormCompActions.inputFormValueUpdate, (state, action) => ({
    ...state,
    formValue: action.formValue
  })),

  on(FormCompActions.inputFormValidUpdate, (state, action) => ({
    ...state,
    formValid: action.formValid
  }))
);

export function reducer(state: FormState | undefined, action: Action) {
  return formReducer(state, action);
}
