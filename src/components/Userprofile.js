import React from "react";
import styled from "styled-components";

const Userprofile = () => {
  const userInfo = JSON.parse(localStorage.getItem("googleData"));

  return (
    <UserProfileContainer>
      <UserProfile>
        <img src={userInfo.image} alt="user-profile" />
      </UserProfile>
      <UserName>
        <h3>{userInfo.name}</h3>
      </UserName>
    </UserProfileContainer>
  );
};

export default Userprofile;

const UserProfileContainer = styled.div`
  width: 100%;
  padding-top: 1rem;
  padding-left: 0.6rem;
  display: flex;
`;
const UserProfile = styled.div`
  width: 64px;
  height: 54px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50rem;
  }
`;
const UserName = styled.div`
  width: 100%;
  padding-top: 1rem;
  padding-left: 0.6rem;
  color: #000;
`;
