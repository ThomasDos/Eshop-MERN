import React from "react";

import {
  SignInandSignUpContainer,
  SignInContainer,
  SignUpContainer,
} from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => {
  return (
    <SignInandSignUpContainer>
      <SignInContainer />
      <SignUpContainer />
    </SignInandSignUpContainer>
  );
};

export default SignInAndSignUpPage;
