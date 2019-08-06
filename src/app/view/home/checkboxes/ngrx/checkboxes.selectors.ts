import {CheckBoxesState} from './checkboxes.state';
import {createSelector} from '@ngrx/store';
import {AppState} from '../../../../ngrx-state/app.state';

const selectCheckbox = (state: AppState) => state.checkboxes;

export const selectCheckboxes = createSelector(
  selectCheckbox,
  (state: CheckBoxesState) => state.checkboxValue
);
