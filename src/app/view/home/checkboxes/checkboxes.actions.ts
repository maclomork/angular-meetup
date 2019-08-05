import {createAction, props} from '@ngrx/store';

export const checkBoxValueChange = createAction(
  '[Checkboxes Component] checkbox\' value changed',
  props<{ newValue: boolean }>()
);
