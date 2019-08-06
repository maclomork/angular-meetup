import {createAction} from '@ngrx/store';

export const leftButtonClicked = createAction(
  '[Buttons Component] left button clicked'
);

export const rightButtonClicked = createAction(
  '[Buttons Component] right button clicked'
);
