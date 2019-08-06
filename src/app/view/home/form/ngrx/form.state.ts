export interface FormState {
  formValid: boolean;
  formValue: string;
}

export const initialFormState: FormState = {
  formValid: false,
  formValue: ''
};
