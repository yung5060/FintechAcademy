import React from 'react';
import styled from "styled-components";

const HearderBlock = styled.div`
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    height: 60px;
    border-bottom: 1px solid #000;
`;

const AppHeader = ({title}) => {
    return (
        <HearderBlock>{title}</HearderBlock>
    )
}

export default AppHeader