import React from 'react'
import styled from "styled-components";


 const Userprofile = () => {
    return (
        <UserProfileContainer>
            <UserProfile>
              <img
                src="https://www.fakepersongenerator.com/Face/male/male1084844306885.jpg"
                alt="user-profile"
              />
            </UserProfile>
            <UserName>
              <h3>Aman Gupta</h3>
            </UserName>
          </UserProfileContainer>
    )
}

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