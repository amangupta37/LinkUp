import React, { useState } from "react";
import styled from "styled-components";
import Media from "./Media";
import Userprofile from "./Userprofile";
import Postheader from "./Postheader";
import { projectFirestore, timestamp } from "../firebase/config";

const Writepost = ({ discardPost }) => {
  const [storeImgLink, setstoreImgLink] = useState(null);

  const [input, setInput] = useState("");

  const userPostInput = (e) => {
    const postContent = e.target.value;
    setInput(postContent);
  };

  const submitPostContent = (e) => {
    e.preventDefault();

    if (!input) return;

    addPostToFirebase();

    setInput("");
    setstoreImgLink(null);
  };

  const addPostToFirebase = () => {
    const createdPost = timestamp();

    let postDetails = {
      postcontent: input,
      postimage: storeImgLink,
      time: createdPost,
    };

    console.log(postDetails);

    projectFirestore.collection("post").add(postDetails);

    discardPost(false);
  };

  return (
    <Container>
      <PostContainer>
        <HeaderContainer>
          <Postheader canclePostpopupo={discardPost} />
        </HeaderContainer>
        <form>
          <FormContainer>
            <TextContainer>
              <Userprofile />
              <TextAreaContainer>
                <textarea
                  type="text"
                  placeholder="What do you want to talk about ?"
                  value={input}
                  onChange={userPostInput}
                />
              </TextAreaContainer>
            </TextContainer>
            <MediaContainer>
              <Media setstoreImgLink={setstoreImgLink} />
              <PostItemsContainer>
                <button
                  type="submit"
                  onClick={submitPostContent}
                  disabled={!input}
                >
                  Post
                </button>
              </PostItemsContainer>
            </MediaContainer>
          </FormContainer>
        </form>
      </PostContainer>
    </Container>
  );
};

export default Writepost;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
`;

const PostContainer = styled.div`
  width: 35%;
  margin: 0 auto;
  margin-top: 5rem;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
  display: grid;
  grid-template-rows: 50px 1fr;
  @media only screen and (max-width: 600px) {
    width: 95%;
    margin-top: 3rem;
  }
`;
const HeaderContainer = styled.div`
  width: 100%;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 200px 1fr;
`;

const TextContainer = styled.div`
  width: 100%;
  border-top: 2px solid #3333;
  display: grid;
  grid-template-rows: 80px 1fr;
`;

const TextAreaContainer = styled.div`
  width: 100%;
  height: 100%;
  textarea {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    resize: none;
    padding-left: 0.7rem;
    font-size: 0.9rem;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans",
      Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  }
`;

const PostItemsContainer = styled.div`
  width: 100%;
  padding-right: 1rem;
  display: flex;
  flex-direction: row-reverse;

  button {
    width: 100px;
    height: 2rem;
    cursor: pointer;
    border-radius: 2rem;
    border: none;
    outline: none;
    background: rgb(10, 102, 194);
    color: #ffff;
    font-size: 0.9rem;
  }
`;

const MediaContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
`;
