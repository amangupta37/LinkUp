import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { projectFirestore } from "../../firebase/config";

const Userscomments = ({ userpostId }) => {
  const [getComment, setgetComment] = useState([]);

  const getPostComments = () => {
    projectFirestore
      .collection("post")
      .doc(userpostId)
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        let postArr = [];

        snapshot.docs.map((doc) => {
          return postArr.push(doc.data());
        });
        setgetComment(postArr);
      });
  };
  useEffect(() => {
    getPostComments();
  });

  return (
    <>
      {getComment.map((usercomment) => {
        return (
          <Container>
            <UserProfileContainer>
              <ProfileImage>
                <img src={usercomment.userprofile} alt="user-profile" />
              </ProfileImage>
            </UserProfileContainer>
            <CommentContainer>
              <Username>
                <p>{usercomment.username}</p>
              </Username>
              <UserComment>
                <p>{usercomment.usercomment}</p>

                {usercomment.timestamp !== null ? (
                  <p id="time">
                    {usercomment.timestamp.toDate().toDateString() + " "} @{" "}
                    {usercomment.timestamp.toDate().toLocaleTimeString()}
                  </p>
                ) : null}
              </UserComment>
            </CommentContainer>
          </Container>
        );
      })}
    </>
  );
};

export default Userscomments;
const Container = styled.div`
  width: 95%;
  margin-top: 2rem;
  height: 100px;
  display: grid;
  grid-template-columns: 80px 1fr;
  @media only screen and (max-width: 600px) {
    width: 100%;

    grid-template-columns: 50px 1fr;
    margin-top: 1.3rem;
  }
`;

const UserProfileContainer = styled.div`
  width: 100%;

  //   background: red;

  @media only screen and (max-width: 600px) {
    width: 95%;
  }
`;

const ProfileImage = styled.div`
  width: 60%;
  padding-top: 0.5rem;
  margin-left: 1.2rem;

  img {
    width: 100%;
    border-radius: 50%;
  }

  @media only screen and (max-width: 600px) {
    width: 80%;
    margin-left: 0.3rem;
    padding-top: 0.5rem;
  }
`;

const CommentContainer = styled.div`
  width: 100%;
  background: #eef3f1;
  border-radius: 0.3rem;
  display: grid;
  grid-template-rows: 30px 1fr;
`;

const Username = styled.div`
  width: 100%;
  //   background: red;
  p {
    padding-top: 0.3rem;
    padding-left: 0.5rem;
    color: #000;
    font-size: 1rem;
    font-weight: 600;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans",
      Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  }
`;
const UserComment = styled.div`
  width: 100%;
  //   background: lime;
  overflow: hidden;

  p {
    padding: 0.3rem;
    padding-top: 0.3rem;
    padding-left: 0.5rem;
    color: rgba(0, 0, 0, 0.9);
    font-size: 0.9rem;
    font-weight: 400;
  }

  #time {
    margin-top: 1rem;
    color: #333;
    font-size: 0.7rem;
  }
`;
