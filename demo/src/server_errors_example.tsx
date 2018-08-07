import * as React from 'react';

import {
  ValidatedForm,
  ValidatedSubmitButton,
  ValidatedTextInput,
  ValidationSet,
} from 'casium-forms';

const errors = [{ error: 'something', error_description: 'the thing you submitted was wrong!' }];

const serverErrorsExample = () => (
  <ValidatedForm
    validationSet={new ValidationSet()}
    errors={errors}
  >
    <ValidatedTextInput name='field1' label='Form Field 1'/>
    <ValidatedSubmitButton key='submitBtn' value='Submit'/>
  </ValidatedForm>
);

export default serverErrorsExample as React.SFC;
