import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 340px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  button {
    margin-top: auto;
  }
  @media (max-width: 800px) {
    width: 300px;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const EmptyMessage = styled.span`
  font-size: 1.5rem;
  margin: 50px auto;
`;
