import * as React from 'react';

import { omit } from 'ramda';

import { ValidatedForm, ValidationSet } from 'react-stateless-forms';

export type ValidatedFormContainerProps = {
  validationSet: ValidationSet;
  initialValues?: {};
};

type ValidatedFormContainerState = {
  errors: string[];
  fieldValues: {};
};

export default class ValidatedFormContainer extends
  React.Component<ValidatedFormContainerProps, ValidatedFormContainerState> {

  constructor(props: ValidatedFormContainerProps) {
    super(props);

    this.state = {
      errors: [],
      fieldValues: props.initialValues || {},
    };

    this.onUpdate = this.onUpdate.bind(this);
  }

  public onUpdate(values: {}): void {
    this.setState({
      fieldValues: values,
    });
  }

  public render(): JSX.Element {
    return <ValidatedForm
      {...this.state}
      {...omit(['initialValues'], this.props)}
      onUpdate={this.onUpdate}
      onSubmit={() => {}}
    />;
  }
}
