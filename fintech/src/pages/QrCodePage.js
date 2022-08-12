import React from 'react';
import AppHeader from '../components/common/AppHeader';
import { QRCodeSVG } from "qrcode.react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import queryString from "query-string";

const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const QrCodePage = () => {
    const { fintechUseNo } = queryString.parse(useLocation().search);

    return (
        <div>
            <AppHeader title={"QR코드"}></AppHeader>
            <QRBlock>
                <QRCodeSVG size={200} value={fintechUseNo} />
                <p>{fintechUseNo}</p>
            </QRBlock>
        </div>
    )
}

export default QrCodePage;