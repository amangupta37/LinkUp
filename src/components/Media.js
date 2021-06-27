import React, { useState } from "react";
import styled from "styled-components";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ClearIcon from "@material-ui/icons/Clear";
import Progress from "./Progress";
const Media = ({ setstoreImgLink, setstoreYoutubeLink }) => {
  const [localImgurl, setlocalImgurl] = useState(null);
  const [error, setError] = useState(null);
  const [showImagePath, setshowImagePath] = useState(false);
  const [youtubeLink, setyoutubeLink] = useState(false);
  const [closeAll, setcloseAll] = useState(false);
  const [hostedImgLink, sethostedImgLink] = useState(null);
  const [embededYoutubeLink, setembededYoutubeLink] = useState("");
  const types = ["image/png", "image/jpeg"];

  if (hostedImgLink !== null) {
    setstoreImgLink(hostedImgLink);
  }

  const getLocalImageURL = (e) => {
    let imageurl = e.target.files[0];

    if (imageurl && types.includes(imageurl.type)) {
      setlocalImgurl(imageurl);
      setError(null);
      setyoutubeLink(false);

      ImagePathbox();
    } else {
      setlocalImgurl(null);
      setError(true);
      setyoutubeLink(false);
    }
  };

  const ImagePathbox = () => {
    setshowImagePath(true);
    setyoutubeLink(false);
    setcloseAll(true);
  };

  const YoutubeLinkbox = () => {
    setyoutubeLink(true);
    setshowImagePath(false);
    setcloseAll(true);
    setError(false);
  };

  const closeAllPath = () => {
    setshowImagePath(false);
    setyoutubeLink(false);
    setcloseAll(false);
  };

  const getYoutubeLink = (e) => {
    const userInput = e.target.value;

    setembededYoutubeLink(userInput);
  };

  if (embededYoutubeLink !== "") {
    setstoreYoutubeLink(embededYoutubeLink);
  }

  return (
    <MediaContainer>
      <DisplayMediaContainer>
        {youtubeLink ? (
          <input
            id="youtubeLink"
            type="text"
            value={embededYoutubeLink}
            placeholder="Enter embeded YouTube video link"
            onChange={getYoutubeLink}
          />
        ) : null}

        {showImagePath ? (
          <input id="localimagePath" type="text" value={localImgurl.name} />
        ) : null}

        {error ? <div>Select png or jpg file</div> : null}

        {closeAll ? <ClearIcon id="close" onClick={closeAllPath} /> : null}
      </DisplayMediaContainer>
      <MediaIconsContainer>
        <form>
          <label>
            <input id="localimageurl" type="file" onChange={getLocalImageURL} />
            <span>
              <ImageIcon id="image" />
            </span>
          </label>
        </form>
        <YouTubeIcon id="youtube" onClick={YoutubeLinkbox} />
      </MediaIconsContainer>

      {localImgurl && (
        <Progress
          localImgurl={localImgurl}
          setlocalImgurl={setlocalImgurl}
          sethostedImgLink={sethostedImgLink}
          setshowImagePath={setshowImagePath}
          setcloseAll={setcloseAll}
          embededYoutubeLink={embededYoutubeLink}
        />
      )}
    </MediaContainer>
  );
};

export default Media;

const MediaContainer = styled.div`
  width: 100%;
  height: 100px;
`;

const DisplayMediaContainer = styled.div`
  width: 80%;
  position: absolute;

  overflow-y: scroll;
  display: grid;
  margin-left: 1rem;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;

  input {
    width: 100%;
    border: none;
    outline: none;
    padding-left: 0.5rem;
    font-size: 0.9rem;
  }
  #close {
    margin-top: 0.7rem;
    color: #333;
    border: 2px solid #3333;
    cursor: pointer;
  }
  div {
    width: 100%;
    text-align: center;
    color: red;
  }

  @media only screen and (max-width: 600px) {
    margin-left: 0rem;

    #close {
      top: 0;
      margin-left: rem;
      margin-top: 0.5rem;
    }

    #youtubeLink {
      font-size: 0.7rem;
    }
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
    margin-top: 2.9rem;
    cursor: pointer;
  }
  #youtube {
    margin-top: 3rem;
  }

  label {
  }

  #localimageurl {
    width: 0rem;
  }
`;
