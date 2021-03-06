import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 28rem;
  min-width: 10rem;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  @media (max-width: 800px) {
    width: 20rem;
  }
`;
export const TitleContainer = styled.h2`
  margin: 10px 0;
  font-size: 1.5rem;
`;

export const SubtitleContainer = styled.span`
  font-size: 1rem;
`;
