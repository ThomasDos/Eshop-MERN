import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;
export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;
export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 800px) {
    width: 22%;
    &:last-child {
      width: 12%;
    }
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

export const TestWarningContainer = styled.div`
  text-align: center;
  margin: 10rem 0 2.5rem 0;
  font-size: 24px;
  color: red;
`;

export const StripheCheckoutButtonWrapperContainer = styled.div`
  margin-left: auto;
  button {
    width: 10rem;
    span {
      font-size: 1.3rem !important;
    }
  }
`;
