import {Action, createReducer, on} from '@ngrx/store';
import * as FormCompActions from './form.actions';

export interface State {
  formValid: boolean;
  formValue: string;
}

export const initialState: State = {
  formValid: false,
  formValue: ''
};

const formReducer = createReducer(
  initialState,

  on(FormCompActions.inputFormUpdate, (state, action) => ({
    ...state,
    formValid: action.formValid,
    formValue: action.formValue
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return formReducer(state, action);
}
