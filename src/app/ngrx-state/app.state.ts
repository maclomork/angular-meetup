import {ButtonState} from '../view/home/buttons/ngrx/buttons.state';
import {FormState} from '../view/home/form/ngrx/form.state';
import {CheckBoxesState} from '../view/home/checkboxes/ngrx/checkboxes.state';

export interface AppState {
  buttons: ButtonState;
  form: FormState;
  checkboxes: CheckBoxesState;
}
