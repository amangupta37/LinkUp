import React, { useState } from "react";
import styled from "styled-components";

import { Image } from "../Icons/Image";
import { Video } from "../Icons/Video";
import { Article } from "../Icons/Article";
import { Event } from "../Icons/Event";
import Writepost from "./Writepost";

const Addpost = () => {
  const [showPostpopup, setshowPostpopup] = useState(false);
  const WritePost = () => {
    setshowPostpopup(true);
  };

  return (
    <>
      {showPostpopup ? (
        <Postpopup>
          <Writepost discardPost={setshowPostpopup} />
        </Postpopup>
      ) : (
        <Container>
          <FormContainer>
            <UserContainer>
              <Profile>
                <img
                  src="https://www.fakepersongenerator.com/Face/female/female20141023841555267.jpg"
                  alt="user-profile"
                />
              </Profile>
            </UserContainer>
            <InputContainer>
              <InputBox onClick={WritePost}>
                <span>Start a Post</span>
              </InputBox>
            </InputContainer>
          </FormContainer>
          <MediaContainer>
            <Icon>
              <Image /> <p>Images</p>
            </Icon>
            <Icon>
              <Video />
              <p>Video</p>
            </Icon>
            <Icon>
              <Event /> <p>Event</p>
            </Icon>
            <Icon>
              <Article /> <p>Article</p>
            </Icon>
          </MediaContainer>
        </Container>
      )}
    </>
  );
};

export default Addpost;

const Container = styled.div`
  width: 100%;
  // background: #000;
  height: 150px;
  // grid-area: main;
  display: grid;
  z-index: 100;
  grid-template-rows: 90px 1fr;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0;
  }
`;
const FormContainer = styled.div`
  width: 80%;
  display: flex;
  // background: lime;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const UserContainer = styled.div`
  width: 25%;

  @media only screen and (max-width: 600px) {
    width: 35%;
  }
`;
const Profile = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  img {
    width: 50%;
    border-radius: 50%;
  }
  @media only screen and (max-width: 600px) {
    img {
      width: 75%;
      border-radius: 50%;
    }
  }
`;
const InputContainer = styled.div`
  width: 100%;
`;

const InputBox = styled.div`
  width: 95%;
  height: 3.3rem;
  margin-top: 0.5rem;
  border-radius: 1.5rem;
  padding-top: 1.1rem;
  padding-left: 1rem;
  border: 2px solid #3333;
  color: #3339;
  font-weight: 600;

  cursor: pointer;
  @media only screen and (max-width: 600px) {
    height: 3rem;
    padding-top: 0.9rem;
  }
`;
const MediaContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 120px);
  @media only screen and (max-width: 600px) {
    padding-top: 1rem;
    grid-template-columns: repeat(4, 75px);
  }
`;

const Icon = styled.div`
  width: 90%;
  color: #333;

  padding-left: 1rem;
  padding-top: 1rem;
  display: flex;

  p {
    margin-top: 0.2rem;
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    padding-left: 0;
    padding-top: 0;
  }
`;
const Postpopup = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 2000;
  color: red;
`;
