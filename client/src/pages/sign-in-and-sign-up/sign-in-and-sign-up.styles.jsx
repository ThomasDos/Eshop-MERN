import styled from "styled-components";
import SignIn from "./../../components/sign-in/sign-in.component";
import SignUp from "./../../components/sign-up/sign-up.component";

export const SignInandSignUpContainer = styled.div`
  width: 40vw;
  min-width: 40vw;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;

export const SignInContainer = styled(SignIn)``;
export const SignUpContainer = styled(SignUp)``;
