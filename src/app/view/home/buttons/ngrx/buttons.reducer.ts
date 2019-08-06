import {Action, createReducer, on} from '@ngrx/store';
import * as ButtonsCompActions from './buttons.actions';
import {ButtonState, initialButtonState} from './buttons.state';

const buttonsReducer = createReducer(
  initialButtonState,

  on(ButtonsCompActions.leftButtonClicked, state => ({
    ...state,
    leftButtonClickedAmount: state.leftButtonClickedAmount + 1
  })),

  on(ButtonsCompActions.rightButtonClicked, state => ({
    ...state,
    rightButtonClickedAmount: state.rightButtonClickedAmount + 1
  }))
);

export function reducer(state: ButtonState | undefined, action: Action) {
  return buttonsReducer(state, action);
}
