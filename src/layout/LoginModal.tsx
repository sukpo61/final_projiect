import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { IoCloseCircleSharp } from "react-icons/io5";

interface Props {
  setLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function LoginModal({ setLoginModalOpen }: Props) {
  const STEAM_OPENID_ENDPOINT = `https://steamcommunity.com/openid/login?openid.ns=http://specs.openid.net/auth/2.0&openid.mode=checkid_setup&openid.return_to=http://localhost:3000/login/&openid.realm=http://localhost:3000/login&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select`;
  const SteamLogin = () => {
    window.location.href = STEAM_OPENID_ENDPOINT;
  };

  const handleLoginModalClose = () => {
    setLoginModalOpen(false);
  };

  return (
    <ModalArea>
      <ModalWindow>
        <IoCloseCircleSharp
          style={{
            color: "#777D87",
            width: 17,
            height: 17,
            position: "absolute",
            right: 8,
            top: 8,
            cursor: "pointer",
          }}
          onClick={handleLoginModalClose}
        />
        <ModalIntro>
          로그인하여 Steam+의
          <br />
          다양한 서비스를 경험해보세요
        </ModalIntro>
        <LoginBtn>
          <LoginBtnSteamLogo src="/img/SteamLogo.png" />
          <LoginBtnText onClick={SteamLogin}>
            Steam 계정으로 로그인
          </LoginBtnText>
        </LoginBtn>
      </ModalWindow>
      {/* <ModalClose onClick={handleLoginModalClose}>닫기</ModalClose> */}
    </ModalArea>
  );
}

const moveLoginModal = keyframes`
0% {
    transform: translateX(0px);
    opacity:0%;
  }
  100% {
    transform: translateX(120px);
    opacity: 100%;
  }`;

const ModalArea = styled.div`
  position: absolute;
  margin-top: 28px;
  /* left: 50%; */
  transform: translate(120px, 0);
  /* margin-left: 120px; */
  /* margin-top: 28px; */
  z-index: 9999999;
  animation: ${moveLoginModal} 0.5s ease;
`;

const ModalWindow = styled.div`
  position: relative;
  width: 240px;
  height: 120px;

  background: rgba(38, 50, 69, 0.8);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const ModalClose = styled.button`
  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 12px;
  color: white;
  width: 50px;
  padding: 10px;
`;

const ModalIntro = styled.p`
  height: 32px;
  left: 47px;
  top: 20px;

  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.03em;

  color: #ffffff;
`;

const LoginBtn = styled.button`
  width: 200px;
  height: 40px;
  left: 20px;
  top: 60px;
  background: linear-gradient(
    90deg,
    #12f8d8 -15.62%,
    #09bec6 40.41%,
    #007db2 107.07%
  );
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  justify-content: center;
`;

const LoginBtnSteamLogo = styled.img`
  width: 24px;
`;

const LoginBtnText = styled.p`
  height: 17px;
  left: 48px;
  top: 11px;

  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
`;

export default LoginModal;
