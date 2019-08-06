import {FormState} from './form.state';
import {AppState} from '../../../../ngrx-state/app.state';
import {createSelector} from '@ngrx/store';

const selectForm = (state: AppState) => state.form;

export const selectFormValid = createSelector(
  selectForm,
  (state: FormState) => state.formValid
);

export const selectFormValue = createSelector(
  selectForm,
  (state: FormState) => state.formValue
);
