import React from "react";
import {
  FormInputLabelContainer,
  FormInputContainer,
  GroupContainer,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer {...otherProps} onChange={handleChange} />

      {label ? (
        <FormInputLabelContainer length={otherProps.value.length}>
          {label}
        </FormInputLabelContainer>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
