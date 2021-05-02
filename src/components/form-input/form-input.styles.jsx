import styled, { css } from "styled-components";

const shrinkLabel = css`
  top: -14px;
  font-size: 0.8rem;
  color: black;
`;

const shrink = (props) => {
  return props.length ? shrinkLabel : null;
};

export const GroupContainer = styled.div`
  position: relative;
  margin: 3rem 0;

  input[type="password"] {
    letter-spacing: 0.4em;
  }
`;

export const FormInputLabelContainer = styled.label`
  color: grey;
  font-size: 1.2rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${shrink}
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 1.5rem;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 1.2rem 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabelContainer} {
    ${shrinkLabel};
  }
`;
