import {Action, createReducer, on} from '@ngrx/store';
import * as CheckboxesCompActions from './checkboxes.actions';

export interface State {
  checkboxValue: boolean;
}

export const initialState: State = {
  checkboxValue: false
};

const checkboxesReducer = createReducer(
  initialState,

  on(CheckboxesCompActions.checkBoxValueChange, (state, action) => ({
    ...state,
    checkboxValue: action.newValue
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return checkboxesReducer(state, action);
}
