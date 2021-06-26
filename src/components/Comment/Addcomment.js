import React from "react";
import styled from "styled-components";
import Userscomments from "./Userscomments";
import ClearIcon from "@material-ui/icons/Clear";
const Addcomment = ({ setshowCommentBox }) => {
  const closeComment = () => {
    setshowCommentBox(false);
  };
  return (
    <Container>
      <CommentContainer>
        <WriteComment>
          <ClearIcon id="closeCommentBox" onClick={closeComment} />
          <UserCommentInput>
            <UserProfile>
              <ImageContainer>
                <img
                  src="https://www.fakepersongenerator.com/Face/male/male1085399176728.jpg"
                  alt="user-profile"
                />
              </ImageContainer>
            </UserProfile>
            <UserInput>
              <textarea id="cmt-box" type="text" placeholder="Add a comment" />
            </UserInput>
          </UserCommentInput>
          <PostComment>
            <button>Post</button>
          </PostComment>
        </WriteComment>

        <ShowComment>
          <Userscomments />
          <Userscomments />
          <Userscomments />
          <Userscomments />
        </ShowComment>
      </CommentContainer>
    </Container>
  );
};

export default Addcomment;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
`;
const CommentContainer = styled.div`
  width: 40%;
  height: 600px;
  margin: 0 auto;
  margin-top: 5rem;
  background: #fff;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
  border-radius: 5px;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-gap: 5rem;

  @media only screen and (max-width: 600px) {
    width: 95%;
    height: 480px;
    margin-top: 3rem;
    grid-template-rows: 90px 1fr;
    padding: 8px;
    grid-gap: 4rem;
  }
`;

const WriteComment = styled.div`
  width: 100%;
  margin-top: 0rem;

  #closeCommentBox {
    color: #333;
    cursor: pointer;
  }
`;

const UserCommentInput = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const UserProfile = styled.div`
  width: 10%;
  @media only screen and (max-width: 600px) {
    width: 28%;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  margin-top: 0.5rem;

  img {
    width: 100%;
    border-radius: 50%;
  }

  @media only screen and (max-width: 600px) {
    width: 70%;
    height: 100%;
    margin-top: 0;
  }
`;

const UserInput = styled.div`
  width: 100%;

  #cmt-box {
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    padding: 1rem;
    font-size: 1rem;
    border: 2px solid #3333;
  }
  @media only screen and (max-width: 600px) {
    #cmt-box {
      padding: 0.5rem;
      font-size: 0.9rem;
      border: 2px solid #3333;
    }
  }
`;

const PostComment = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: row-reverse;

  button {
    width: 5rem;
    margin-right: 1rem;
    height: 2rem;
    background: rgb(10, 102, 194);
    border: none;
    outline: none;
    border-radius: 1rem;
    color: #ffff;
    font-size: 0.9rem;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    padding-top: 0.2rem;

    button {
      margin-right: 0;
      height: 1.9rem;
    }
  }
`;

const ShowComment = styled.div`
  width: 100%;
  margin-top: 1rem;
  // background: lime;
  // border-top: 2px solid #3333;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
