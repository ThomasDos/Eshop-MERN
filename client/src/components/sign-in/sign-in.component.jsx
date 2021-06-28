import React, { useState } from "react";

import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import {
  SignInContainer,
  TitleContainer,
  ButtonsContainer,
  SubtitleContainer,
} from "./sign-in.styles";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredientials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredientials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredientials, [name]: value });
  };

  return (
    <SignInContainer>
      <TitleContainer>I already have an account</TitleContainer>
      <SubtitleContainer>
        Sign in with your email and password.
      </SubtitleContainer>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          label="email"
          required
          value={email}
        />

        <FormInput
          type="password"
          name="password"
          label="password"
          required
          handleChange={handleChange}
          value={password}
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password, cart) =>
    dispatch(emailSignInStart({ email, password, cart })),
});

export default connect(null, mapDispatchToProps)(SignIn);
