import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const InfoContainer = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled.span`
  width: 23%;
  padding-left: 20px;
  display: flex;
  font-size: 1.3rem;
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
  font-weight: 500;
`;

export const ValueContainer = styled.div`
  margin: 0 10px;
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  font-size: 1.4rem;
  cursor: pointer;
  font-weight: bold;
`;
