import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: #5aa46f;
  background: -moz-linear-gradient(left, #5aa46f 0%, #2388cb 39%, #753072 100%);
  background: -webkit-linear-gradient(
    left,
    #5aa46f 0%,
    #2388cb 39%,
    #753072 100%
  );
  background: linear-gradient(to right, #5aa46f 0%, #2388cb 39%, #753072 100%);
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
