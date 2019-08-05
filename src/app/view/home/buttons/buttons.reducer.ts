import {Action, createReducer, on} from '@ngrx/store';
import * as ButtonsCompActions from './buttons.actions';

export interface ButtonState {
  leftButtonClickedAmount: number;
  rightButtonClickedAmount: number;
}

export const initialState: ButtonState = {
  leftButtonClickedAmount: 0,
  rightButtonClickedAmount: 0
};

const buttonsReducer = createReducer(
  initialState,

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
