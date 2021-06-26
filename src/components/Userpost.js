import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Reaction from "./Reaction";
import { projectFirestore } from "../firebase/config";
const Userpost = () => {
  const [messages, setMessage] = useState([]);

  const getMessage = () => {
    projectFirestore
      .collection("post")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        let arr = [];
        snapshot.docs.map((doc) => arr.push(doc.data()));
        setMessage(arr);
      });
  };

  useEffect(() => {
    getMessage();
  }, []);

  console.log(messages);

  return (
    <UserPost>
      {messages.map((value) => {
        return (
          <Container>
            <UserInfoContainer>
              <UserContainer>
                <UserImageContainer>
                  <img src={value.userprofile} alt="user-img" />
                </UserImageContainer>
                <UserDetailsContainer>
                  <h3>{value.username}</h3>
                  <p>{value.usermail}</p>
                </UserDetailsContainer>
              </UserContainer>
              <PostInfoContainer>
                <p>{value.postcontent}</p>
              </PostInfoContainer>
            </UserInfoContainer>
            <PostImageContainer>
              {value.postimage != null ? (
                <img src={value.postimage} alt="user-post" />
              ) : null}
            </PostImageContainer>

            <FeedContainer>
              <Reaction />
            </FeedContainer>
          </Container>
        );
      })}
    </UserPost>
  );
};

export default Userpost;

const UserPost = styled.div`
  // background: red;
`;

const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: auto auto 100px;
  // background: lime;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  margin-top: 1rem;

  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
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
  width: 90%;
  margin: 0 auto;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const FeedContainer = styled.div`
  width: 100%;

  // background: red;
  // background: yellow;
`;
