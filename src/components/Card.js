import React from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";

export default function Card() {
  return (
    <CardWrapper>
      <CardContent>
        <QrWrapper>
          <QRCode
            bgColor="transparent"
            fgColor="#FFF"
            level="H"
            size={160}
            value="https://github.com/SisifoDev"
          />
        </QrWrapper>
        <CardInfo>
          <CardTitle>
            Improve your front-end skills by building projects
          </CardTitle>
          <CardDescription>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </CardDescription>
        </CardInfo>
      </CardContent>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  background: var(--white);
  width: 320px;
  height: 497px;
  border-radius: 20px;
  box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.0476518);
  padding: 16px;
  display: flex;
  flex-direction: column;
  @media (min-width: 375px) {
    margin: 0 28px;
  }
`;

const QrWrapper = styled.div`
  width: 288px;
  height: 288px;
  background: #2c7dfa;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContent = styled.div``;

const CardInfo = styled.div``;

const CardTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  margin-top: 24px;
`;

const CardDescription = styled.p`
  color: var(--grayishBlue);
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.1875px;
  margin-top: 16px;
`;
