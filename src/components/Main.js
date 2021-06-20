import styled from "styled-components";
import Addpost from "./Addpost";
import Userpost from "./Userpost";
const Main = (props) => {
  return (
    <Container>
      <FormContainer>
        <Addpost />
      </FormContainer>
      <PostContainer>
        <Userpost />
      </PostContainer>
      <PostContainer>
        <Userpost />
      </PostContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 85%;
  margin-left: 5rem;
  grid-area: main;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const PostContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 1rem;

  background-color: #fff;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

export default Main;
