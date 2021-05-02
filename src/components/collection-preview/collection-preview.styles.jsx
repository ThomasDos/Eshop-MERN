import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.7rem;
`;

export const TitleContainer = styled(Link)`
  font-size: 1.7rem;
  margin-bottom: 1.25rem;
  font-weight: bold;
  margin-left: 2rem;
  width: 10rem;
  text-align: center;
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
