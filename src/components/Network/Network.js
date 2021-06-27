import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Network = () => {
  return (
    <Container>
      <HeaderContainer>People you may know</HeaderContainer>
      <NetworkContainer>
        <NetworkCardContainer>
          <UserProfileContainer>
            <ProfileContainer>
              <ProfileImg>
                <img
                  src="https://www.fakepersongenerator.com/Face/male/male1084987432465.jpg"
                  alt=""
                />
              </ProfileImg>
            </ProfileContainer>
            <ProfileImgContainer>
              <p>Aman Gupta</p>
            </ProfileImgContainer>
          </UserProfileContainer>
          <UserInfoContainer>
            <Info>
              <p>amangupta@gmail.com</p>
            </Info>
            <CoonectContainer>
              <button>Connect</button>
            </CoonectContainer>
          </UserInfoContainer>
        </NetworkCardContainer>
      </NetworkContainer>
    </Container>
  );
};

export default Network;

const Container = styled.div`
  width: 100%;
  margin-top: 7rem;
  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;
const HeaderContainer = styled.div`
  width: 68%;
  margin: 0 auto;
  height: 2rem;
  background: #eef3f1;
  padding: 0.3rem;
  font-size: 1.3rem;
  color: #333;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const NetworkContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  background: #eef3f1;
  border-radius: 0.3rem;
  padding: 0.8rem;
  height: auto;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  @media (max-width: 768px) {
    width: 90%;
    height: 75vh;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const NetworkCardContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  height: 280px;
  background: hsla(0, 0%, 100%, 0.9);
  border-radius: 0.3rem;
  display: grid;
  grid-template-rows: 140px 1fr;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const UserProfileContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
const ProfileContainer = styled.div`
  width: 100%;
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 443px;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
`;
const ProfileImg = styled.div`
  width: 100px;
  margin: 0 auto;
  height: 64px;
  position: relative;
  margin-top: 1rem;

  img {
    width: 100%;

    border-radius: 50%;
  }
`;
const ProfileImgContainer = styled.div`
  width: 100%;
  p {
    padding-top: 2.2rem;
    text-align: center;
    font-weight: 600;
  }
`;
const UserInfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
const Info = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 0.5rem;
  font-size: 0.8rem;
  text-align: center;
`;
const CoonectContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  button {
    width: 60%;
    height: 2.5rem;
    border: 2px solid #0a66c2;
    border-radius: 2rem;
    background: #ffff;
    font-size: 0.9rem;
    color: #0a66c2;
    font-weight: 600;
    cursor: pointer;
  }
  button:hover {
    background: #a8d4ff;

    border: 3px solid #0a66c2;
  }
`;
