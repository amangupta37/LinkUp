import React from "react";
import styled from "styled-components";
import Reaction from "./Reaction";

const Userpost = () => {
  return (
    <Container>
      <UserInfoContainer>
        <UserContainer>
          <UserImageContainer>
            <img
              src="https://www.fakepersongenerator.com/Face/female/female20141023841555267.jpg"
              alt="user-img"
            />
          </UserImageContainer>
          <UserDetailsContainer>
            <h3>Aman Gupta</h3>
            <p>amangupta@gmail.com</p>
          </UserDetailsContainer>
        </UserContainer>
        <PostInfoContainer>
          <p>
            Erat ipsum dolore ea erat kasd rebum vero ipsum gubergren. Ipsum
            stet dolores eos dolore amet eirmod. Diam diam sit.
          </p>
        </PostInfoContainer>
      </UserInfoContainer>
      <PostImageContainer>
        <img
          src="https://www.royalfoibles.com/wp-content/uploads/2016/04/dummy-post-square-1-1.jpg"
          alt="user-post"
        />
      </PostImageContainer>
      <FeedContainer>
        <Reaction />
      </FeedContainer>
    </Container>
  );
};

export default Userpost;

const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: auto auto 100px;
`;

const UserInfoContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  // background: red;
  padding: 0.5rem;
  display: grid;
  grid-template-rows: 80px auto;
  @media only screen and (max-width: 600px) {
    padding: 0rem;
  }
`;
const UserContainer = styled.div`
  width: 100%;
  // background: green;
  display: flex;
`;
const UserImageContainer = styled.div`
  width: 15%;
  // background: purple;
  display: grid;
  place-items: center;
  img {
    width: 70px;
    height: 70px;
  }
  @media only screen and (max-width: 600px) {
    width: 35%;

    img {
      width: 60px;
      height: 60px;
    }
  }
`;
const UserDetailsContainer = styled.div`
  width: 100%;
  // background: lime;
  padding-top: 0.5rem;
  padding-left: 1rem;
  font-size: 0.9rem;
  @media only screen and (max-width: 600px) {
    padding-left: 0.1rem;
    padding-top: 0.9rem;
    h3 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;

const PostInfoContainer = styled.div`
  width: 100%;
  // background: #fff;
  font-size: 0.9rem;
  padding-left: 0.5rem;
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const PostImageContainer = styled.div`
  width: 100%;
  // background: green;
  img {
    width: 100%;
  }
`;
const FeedContainer = styled.div`
  width: 100%;
  // background: yellow;
`;
