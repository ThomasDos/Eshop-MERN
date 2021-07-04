import React from "react";
import {
  ContactContainer,
  ImageContainer,
  TextContainer,
} from "./contact.styles";
const Contact = () => {
  return (
    <ContactContainer>
      <ImageContainer src="https://i.imgur.com/qIufhof.png" />
      <TextContainer>Sorry, we're doing some work on the site</TextContainer>
    </ContactContainer>
  );
};

export default Contact;
