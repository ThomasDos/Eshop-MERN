import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 20rem;
  }
`;
export const TitleContainer = styled.h2`
  margin: 10px 0;
  font-size: 1.5rem;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubtitleContainer = styled.span`
  font-size: 1rem;
`;
