import * as fromForm from './form.reducer';
import {initialFormState} from './form.state';
import {inputFormValidUpdate, inputFormValueUpdate} from './form.actions';

describe('FormReducer', () => {

  test('Undefined action results in initial state', () => {
    const action = {type: 'UNDEFINED'};
    const result = fromForm.reducer(undefined, action);

    expect(result).toBe(initialFormState);
  });

  test('Changing the form values will update the values', () => {
    const formValueAction = inputFormValueUpdate({formValue: 'some text'});

    const result = fromForm.reducer(initialFormState, formValueAction);
    expect(result).toEqual({
      ...initialFormState,
      formValue: 'some text'
    });
  });

  test('Changing the form validity will update the valid-value', () => {
    const formValidAction = inputFormValidUpdate({formValid: true});

    const result = fromForm.reducer(initialFormState, formValidAction);
    expect(result).toEqual({
      ...initialFormState,
      formValid: true
    });
  });

});
