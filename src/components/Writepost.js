import React from "react";
import styled from "styled-components";
import Media from "./Media";
import Userprofile from "./Userprofile";
import Postheader from "./Postheader";
const Writepost = (props) => {
  return (
    <Container>
      <PostContainer>
        <HeaderContainer>
          <Postheader canclePostpopupo={props.discardPost} />
        </HeaderContainer>
        <form>
          <FormContainer>
            <TextContainer>
              <Userprofile />
              <TextAreaContainer>
                <textarea
                  type="text"
                  placeholder="What do you want to talk about ?"
                />
              </TextAreaContainer>
            </TextContainer>
            <MediaContainer>
              <Media />
              <PostItemsContainer>
                <button>Post</button>
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
  // height: 400px;
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
  // background: lime;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  // background: blue;
  display: grid;
  grid-template-rows: 200px 1fr;
`;

const TextContainer = styled.div`
  width: 100%;
  border-top: 2px solid #3333;
  display: grid;
  grid-template-rows: 80px 1fr;
  // background: red;
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
  // border-left: 2px solid #3333;
  padding-right: 1rem;
  display: flex;
  flex-direction: row-reverse;

  // background: yellow;
  button {
    width: 100px;
    height: 2rem;
    cursor: pointer;
    border-radius: 2rem;
    border: none;
    outline: none;
    background: #3333;
  }
`;

const MediaContainer = styled.div`
  width: 100%;
  // background: green;
  display: flex;
  align-items: flex-end;
`;
