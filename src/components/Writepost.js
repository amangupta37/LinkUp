import React from "react";
import styled from "styled-components";
import Media from "./Media";
import Userprofile from "./Userprofile";
import Postheader from "./Postheader";
const Writepost = (props) => {
  return (
    <Container>
      <PostContainer>
        <Postheader canclePostpopupo={props.discardPost} />
        <TextContainer>
          <Userprofile />
          <TextAreaContainer>
            <textarea placeholder="What do you want to talk about ?"></textarea>
          </TextAreaContainer>
        </TextContainer>
        <Media />
        <PostItemsContainer>
          <button>Post</button>
        </PostItemsContainer>
      </PostContainer>
    </Container>
  );
};

export default Writepost;

const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding-top: 5rem;
  position: fixed;
  @media only screen and (max-width: 600px) {
    padding-top: 2rem;
  }
`;

const PostContainer = styled.div`
  width: 35%;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
  display: grid;
  grid-template-rows: 50px auto 280px;
  @media only screen and (max-width: 600px) {
    width: 90%;
    grid-template-rows: 50px auto 200px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  border-top: 2px solid #3333;
  display: grid;
  grid-template-rows: 90px 1fr;
`;

const TextAreaContainer = styled.div`
  width: 100%;
  background: red;
  textarea {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
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
  border-left: 2px solid #3333;
  padding-right: 1rem;
  display: flex;
  flex-direction: row-reverse;
  button {
    width: 100px;
    height: 2.5rem;
    cursor: pointer;
    border-radius: 2rem;
    border: none;
    outline: none;
    background: #3333;
  }
`;
