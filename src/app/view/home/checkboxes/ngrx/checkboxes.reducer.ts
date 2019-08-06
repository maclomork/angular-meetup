import {Action, createReducer, on} from '@ngrx/store';
import * as CheckboxesCompActions from './checkboxes.actions';
import {CheckBoxesState, initialCheckboxesState} from './checkboxes.state';

const checkboxesReducer = createReducer(
  initialCheckboxesState,

  on(CheckboxesCompActions.checkBoxValueChange, (state, action) => ({
    ...state,
    checkboxValue: action.newValue
  }))
);

export function reducer(state: CheckBoxesState | undefined, action: Action) {
  return checkboxesReducer(state, action);
}
