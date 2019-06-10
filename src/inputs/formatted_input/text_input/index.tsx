import { identity } from 'ramda';
import * as  React from 'react';

import FormattedInput, { FormattedInputPropsWithoutFormat } from '../';

const TextInput: React.SFC<FormattedInputPropsWithoutFormat> = props => (
  <FormattedInput format={identity} unformat={identity} {...props} />
);

TextInput.displayName = 'TextInput';

export default TextInput;
