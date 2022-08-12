import React from 'react'
import styled from 'styled-components'
import AppHeader from '../components/common/AppHeader'

const AuthButton = styled.button`
    margin-top: 100px;
    width: 100%;
`;

const IndexPage = () => {

    const handleClick = () => {
        let tmpwindow = window.open("about:blank");
        const clientId = "e117a3f4-8915-4097-8421-b82f0a7c0762";
        tmpwindow.location.href = 
        `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3001/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`
        ;
    };

  return (
    <div>
        <AppHeader title={"토큰 발급 버튼"}></AppHeader>
        <AuthButton onClick={handleClick}>토큰 발급</AuthButton>
    </div>
  );
};

export default IndexPage;