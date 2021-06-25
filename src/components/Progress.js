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
      {url ? <p id="showmsg">Image is attached with this post</p> : null}
    </Container>
  );
};

export default Progress;

const Container = styled.div`
  width: 90%;
  position: absolute;
  top: 15rem;
  text-align: left;
  #showmsg {
    padding: 0.3rem;
    border: 1px solid #38b000;
    color: #ffff;
    background: #38b000;
    border-radius: 0.1rem;
  }
`;
