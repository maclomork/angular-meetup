import {ButtonState} from './buttons.state';
import {createSelector} from '@ngrx/store';
import {AppState} from '../../../../ngrx-state/app.state';

const selectButtons = (state: AppState) => state.buttons;

export const selectLeftButtonClicks = createSelector(
  selectButtons,
  (state: ButtonState) => state.leftButtonClickedAmount
);

export const selectRightButtonClicks = createSelector(
  selectButtons,
  (state: ButtonState) => state.rightButtonClickedAmount
);
