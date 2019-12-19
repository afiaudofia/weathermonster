import React from 'react';
import { FormFeedback, FormGroup } from 'reactstrap';
import Select from 'react-select';
import { FieldInputProps, FieldMetaState } from 'react-final-form';

export interface ISelectOptions {
  value: string;
  label: string;
}

interface IRenderDropDownSelect {
  input: FieldInputProps<any, HTMLElement>;
  meta: FieldMetaState<any>;
  label: string;
  options: ISelectOptions[];
}

export const RenderDropDownSelect: React.SFC<IRenderDropDownSelect> = ({
  input,
  label,
  options,
  meta,
}): JSX.Element => {
  const hasError = meta.invalid && meta.touched;
  return (
    <FormGroup>
      <Select {...input} isClearable={true} placeholder={label} options={options} />
      {hasError && <FormFeedback>{meta.error}</FormFeedback>}
    </FormGroup>
  );
};

interface ISubmitButton {
  disabled: boolean;
  text: string;
  isMakingRequest: boolean;
  onClick: () => void;
}

export const SubmitButton: React.SFC<ISubmitButton> = ({
  disabled,
  text,
  isMakingRequest,
  onClick,
}) => {
  return (
    <button
      disabled={disabled || isMakingRequest}
      onClick={onClick}
      type="submit"
      className="btn btn-primary text-uppercase"
    >
      {isMakingRequest && <i className="fa fa-spinner fa-spin" />} {text}
    </button>
  );
};
