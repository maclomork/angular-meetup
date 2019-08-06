import * as fromCheckbox from './checkboxes.reducer';
import {initialCheckboxesState} from './checkboxes.state';
import {checkBoxValueChange} from './checkboxes.actions';

describe('CheckboxReducer', () => {

  test('Undefined action results in initial state', () => {
    const action = {type: 'UNDEFINED'};
    const result = fromCheckbox.reducer(undefined, action);

    expect(result).toBe(initialCheckboxesState);
  });

  test('Clicking the checkbox will toggle it\'s value', () => {
    const checkBoxClickAction = checkBoxValueChange({newValue: true});
    const result = fromCheckbox.reducer(undefined, checkBoxClickAction);

    expect(result).toEqual({
      ...initialCheckboxesState,
      checkboxValue: true
    });
  });

});
