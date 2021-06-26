import React, { useState } from "react";
import styled from "styled-components";
import { Like } from "../Icons/Like";
import { Comment } from "../Icons/Comment";
import { Share } from "../Icons/Share";
import Addcomment from "./Comment/Addcomment";
const Reaction = () => {
  const [showCommentBox, setshowCommentBox] = useState(false);

  const showComment = () => {
    setshowCommentBox(true);
  };

  return (
    <>
      {showCommentBox ? (
        <CommentPops>
          <Addcomment setshowCommentBox={setshowCommentBox} />
        </CommentPops>
      ) : (
        <Container>
          <RectionStatsContainer>
            <LikesStatsContainer>
              <img
                src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                alt="liked"
              />
              <img
                src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97"
                alt="heart"
              />
              <img
                src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
                alt="clap"
              />
              <span>120</span>
            </LikesStatsContainer>
          </RectionStatsContainer>
          <RectionContainer>
            <HoldReactionContainer>
              <LikeContainer>
                <Like />
                <span>Like</span>
              </LikeContainer>
              <CommentContainer onClick={showComment}>
                <Comment />
                <span>Comment</span>
              </CommentContainer>
              <ShareContainer>
                <Share />
                <span>Share</span>
              </ShareContainer>
            </HoldReactionContainer>
          </RectionContainer>
        </Container>
      )}
    </>
  );
};

export default Reaction;

const Container = styled.div`
  width: 100%;
  height: 100%;
  //   background: red;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const RectionStatsContainer = styled.div`
  width: 100%;

  //   background: yellow;
  padding-left: 1rem;
`;
const LikesStatsContainer = styled.div`
  width: 16%;
  padding-top: 0.5em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;

  img {
    width: 18px;
  }

  color: #333;
  span {
    margin-left: 0.1rem;
    font-size: 1.1rem;
  }
`;

const RectionContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 0.4rem;

  //   background: green;
  border-top: 2px solid #3333;
`;

const HoldReactionContainer = styled.div`
  width: 70%;
  padding-top: 0.5rem;
  // background: yellow;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  @media only screen and (max-width: 600px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.3rem;
  }
`;

const LikeContainer = styled.div`
  width: 80%;

  display: grid;
  
  grid-template-columns:30px 1fr;
  place-items: center;
  cursor:pointer;
  span {
    padding-top: 0.2rem;
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 600px) {
    
    width:100%
    display: grid;
    grid-template-columns: 20px 50px;
    span {
      padding-top: 0.2rem;
      font-size: 0.9rem;
    }
  }
`;

const CommentContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 40px 1fr;
  place-items: center;
  cursor: pointer;
  span {
    padding-top: 0.2rem;
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 5px 110px;
    span {
      padding-top: 0.2rem;
      font-size: 0.9rem;
    }
  }
`;
const ShareContainer = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns: 30px 1fr;
  place-items: center;
  cursor: pointer;
  span {
    padding-top: 0.2rem;
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 30px 1fr;
    span {
      padding-top: 0.2rem;
      font-size: 0.9rem;
    }
  }
`;

const CommentPops = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
`;
