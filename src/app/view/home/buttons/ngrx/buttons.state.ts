export interface ButtonState {
  leftButtonClickedAmount: number;
  rightButtonClickedAmount: number;
}

export const initialButtonState: ButtonState = {
  leftButtonClickedAmount: 0,
  rightButtonClickedAmount: 0
};
