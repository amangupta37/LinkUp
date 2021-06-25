import React from "react";
import styled from "styled-components";
import ClearIcon from "@material-ui/icons/Clear";

const Postheader = (props) => {
  const canclePost = () => {
    props.canclePostpopupo(false);
  };
  return (
    <TitleContainer>
      <h2>Create a post</h2>
      <ClearIconContainer>
        <ClearIcon onClick={canclePost} />
      </ClearIconContainer>
    </TitleContainer>
  );
};
export default Postheader;

const TitleContainer = styled.div`
  width: 100%;
  color: #3339;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  display: flex;
  justify-content: space-between;
`;
const ClearIconContainer = styled.div`
  width: 10%;
  cursor: pointer;
`;
