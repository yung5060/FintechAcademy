import React from 'react'
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const StyledComponent = () => {
  return (
    <div>
      <Wrapper>
        <Title>Hello World, this is my first styled component!</Title>
      </Wrapper>
    </div>
  );
};

export default StyledComponent;
