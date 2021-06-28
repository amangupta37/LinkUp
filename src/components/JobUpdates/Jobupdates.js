import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Jobicon from "../../Icons/jobup.png";
import Preloader from "../../Icons/barpre.gif";

const Jobupdates = () => {
  const [storeJobInfo, setStoreJobInfo] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("https://remotive.io/api/remote-jobs?category=software-dev")
      .then((value) => {
        return value.json();
      })
      .then((data) => {
        setStoreJobInfo(data.jobs);
        setloading(false);
      });
  }, []);

  if (loading) {
    return (
      <PreloaderContainer>
        <PreloaderUpdate>
          <img src={Preloader} alt="gif" id="style-preloader" />
        </PreloaderUpdate>
      </PreloaderContainer>
    );
  }

  return (
    <Container>
      <JobPostContainer>
        <h1>Job opportunites</h1>

        {storeJobInfo
          .slice(0)
          .reverse()
          .map((value) => {
            return (
              <JobPostCard>
                <JobIconHolder>
                  <JobIcon>
                    <img src={Jobicon} alt="" />
                  </JobIcon>
                </JobIconHolder>
                <JobInfoContainer>
                  <PostTitleContainer>
                    <h1>{value.title}</h1>
                  </PostTitleContainer>
                  <PostDetailsContainer>
                    <CompanyDetailsContainer>
                      <p>Company : {value.company_name}</p>
                      <p>Location : {value.candidate_required_location}</p>
                    </CompanyDetailsContainer>
                    <ActiveDetailsContainer>
                      <JobinfoContainer>
                        <p>{value.category}</p>
                        <p>{value.job_type}</p>
                      </JobinfoContainer>
                      <ButtonContainer>
                        <a href={value.url}>
                          <button id="apply">Apply now</button>
                        </a>
                      </ButtonContainer>
                    </ActiveDetailsContainer>
                  </PostDetailsContainer>
                </JobInfoContainer>
              </JobPostCard>
            );
          })}
      </JobPostContainer>
    </Container>
  );
};

export default Jobupdates;

const Container = styled.div`
  width: 100%;
  margin-top: 7rem;
  @media (max-width: 768px) {
    height: 90vh;
  }
  z-index: 100;
`;

const JobPostContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  background: #eef3f1;

  border-radius: 0.3rem;
  padding: 0.8rem;
  height: 80vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const JobPostCard = styled.div`
  width: 80%;
  margin-top: 1rem;
  height: auto;
  background: hsla(0, 0%, 100%, 0.9);
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  padding: 0.8rem;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
  display: flex;
`;
const JobIconHolder = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row-reverse;
`;

const JobIcon = styled.div`
  width: 30%;
  margin-right: 2.5rem;
  margin-top: 2rem;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 50%;
    margin-right: 1.5rem;
    margin-top: 1rem;
  }
`;

const JobInfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 40px 1fr;

  @media (max-width: 768px) {
    grid-template-rows: 30px 1fr;
    grid-gap: 1.5rem;
  }
`;

const PostTitleContainer = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  color: #0a66c2;
`;

const PostDetailsContainer = styled.div`
  width: 100%;
  // background: blue;
  display: grid;
  grid-template-rows: 60px 1fr;
  @media (max-width: 768px) {
    grid-template-rows: auto 1fr;
  }
`;

const CompanyDetailsContainer = styled.div`
  width: 100%;
  p {
    margin-top: 0.2rem;
    color: #333;
  }
  @media (max-width: 768px) {
    padding-left: 0;
    p {
      margin-top: 0.1rem;
      color: #333;
      font-size: 0.9rem;
    }
  }
`;
const ActiveDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  p {
    font-size: 0.9rem;
    color: #3339;
    margin-top: 0.2rem;
  }
  @media (max-width: 768px) {
    p {
      font-size: 0.8rem;
      color: #3339;
      margin-top: 0.1rem;
    }
  }
`;
const JobinfoContainer = styled.div`
  width: 80%;
`;

const ButtonContainer = styled.div`
  width: 20%;
  margin-right: 1rem;
  button {
    width: 100%;
    margin-top: 0.3rem;
    height: 2rem;
    border: none;
    outline: none;
    background: #0a66c2;
    color: #fff;
    font-size: 0.8rem;
    cursor: pointer;
    border-radius: 0.2rem;
  }
  @media (max-width: 768px) {
    width: 40%;
    margin-right: 0.5rem;

    button {
      font-size: 0.7rem;
    }
  }
`;

const PreloaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background: #ffff;
  height: 100vh;
  z-index: 10000;
  display: grid;
  place-items: center;
`;

const PreloaderUpdate = styled.div`
  width: 20%;
  margin-top: 2rem;
  display: grid;
  place-items: center;

  img {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 50%;
    img {
      width: 50%;
    }
  }
`;
