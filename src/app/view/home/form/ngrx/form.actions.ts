import {createAction, props} from '@ngrx/store';

export const inputFormValueUpdate = createAction(
  '[Form Component] input form value updated',
  props<{ formValue: string }>()
);

export const inputFormValidUpdate = createAction(
  '[Form Component] input form valid updated',
  props<{ formValid: boolean }>()
);
