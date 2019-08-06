import * as fromButton from './buttons.reducer';
import {initialButtonState} from './buttons.state';
import {leftButtonClicked, rightButtonClicked} from './buttons.actions';

describe('ButtonReducer', () => {

  test('Undefined action results in initial state', () => {
    const action = {type: 'UNDEFINED'};
    const result = fromButton.reducer(undefined, action);

    expect(result).toBe(initialButtonState);
  });

  test('LeftButtonClicked action should result in increased \'left\'-button-clicks', () => {
    const action = leftButtonClicked();
    const result = fromButton.reducer(initialButtonState, action);

    expect(result).toEqual({
      ...initialButtonState,
      leftButtonClickedAmount: 1
    });
  });

  test('RightButtonClicked action should result in increased \'right\'-button-clicks', () => {
    const action = rightButtonClicked();
    const result = fromButton.reducer(initialButtonState, action);

    expect(result).toEqual({
      ...initialButtonState,
      rightButtonClickedAmount: 1
    });
  });

});
