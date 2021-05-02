import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import {
  SignUpContainer,
  TitleContainer,
  SubtitleContainer,
} from "./sign-up.styles";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <TitleContainer>I do not have a account</TitleContainer>
        <SubtitleContainer>
          Sign up with your email and password
        </SubtitleContainer>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />{" "}
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />{" "}
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton>Sign Up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
