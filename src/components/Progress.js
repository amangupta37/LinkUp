import React, { useEffect } from "react";
import styled from "styled-components";
import useStorage from "../hooks/useStorage";
const Progress = ({
  localImgurl,
  setshowImagePath,
  setcloseAll,
  sethostedImgLink,
}) => {
  const { url } = useStorage(localImgurl);

  useEffect(() => {
    if (url) {
      sethostedImgLink(url);
      setshowImagePath(false);
      setcloseAll(false);
    }
  }, [url, setshowImagePath, setcloseAll, sethostedImgLink]);

  return (
    <Container>
      {url ? (
        <p id="showmsg">
          <img src={url} alt="uploaded" />
        </p>
      ) : null}
    </Container>
  );
};

export default Progress;

const Container = styled.div`
  width: 90%;

  position: absolute;
  top: 12rem;
  text-align: left;
  #showmsg {
    width: 30%;
    height: 100px;
    padding: 0.3rem;
    color: #ffff;
    border-radius: 0.1rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
