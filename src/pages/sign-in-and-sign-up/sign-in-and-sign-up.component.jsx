import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignInandSignUpContainer } from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => {
  return (
    <SignInandSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInandSignUpContainer>
  );
};

export default SignInAndSignUpPage;
