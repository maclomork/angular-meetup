import {createAction, props} from '@ngrx/store';

export const inputFormUpdate = createAction(
  '[Form Component] input form updated',
  props<{ formValid: boolean, formValue: string }>()
);
