import React from 'react'
import styled from "styled-components";

import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
 const Media = () => {
    return (
        <MediaContainer>
          <DisplayMediaContainer>
            <img
              src="https://www.fakepersongenerator.com/Face/male/male1084844306885.jpg"
              alt="akaka"
            />
          </DisplayMediaContainer>
          <MediaIconsContainer>
            <ImageIcon id="image" />
            <YouTubeIcon id="youtube" />
            
          </MediaIconsContainer>
          
        </MediaContainer>
    )
}




export default Media;

const MediaContainer = styled.div`
  width: 100%;
  // background: green;
  display: grid;
  grid-template-rows: 1fr 60px;
`;

const DisplayMediaContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  color: #ffff;
  ::-webkit-scrollbar {
    display: none;
  }
  img {
    width: 200px;
    height: 200px;
  }
`;

const MediaIconsContainer = styled.div`
  width: 100%;

  margin-top: 1rem;
  padding-left: 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, 50px) auto;
  color: #3339;
  cursor: pointer;
  #image {
    padding-top: 0.1rem;
    margin-top: 0.9rem;
  }
  #youtube {
    margin-top: 1rem;
  }
`;
