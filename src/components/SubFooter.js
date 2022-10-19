import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 10px;
  background-color: #768a9a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Data = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Span = styled.span`
  text-align: left;
  font: normal normal normal 14px/22px Arial;
  letter-spacing: 0px;
  color: #ffffff;
`;

const SpanText = styled.span`
  text-align: center;
  font: normal normal normal 14px/22px Arial;
  letter-spacing: 0px;
  color: #ffffff;
`;

const SubFooter = () => {
  return (
    <Container>
      <Data>
        <Span>Privacy & policies</Span>
        <SpanText>© 2022 - Baroque Yachts. All Rights Reserved</SpanText>
      </Data>
    </Container>
  );
};

export default SubFooter;
