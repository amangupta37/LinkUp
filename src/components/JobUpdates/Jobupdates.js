import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Jobicon from "../../Icons/jobup.png";
const Jobupdates = () => {
  const [storeJobInfo, setStoreJobInfo] = useState([]);

  useEffect(() => {
    fetch("https://remotive.io/api/remote-jobs?category=software-dev")
      .then((value) => {
        return value.json();
      })
      .then((data) => {
        setStoreJobInfo(data.jobs);
      });
  }, []);

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
`;

const JobPostContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  background: hsla(0, 0%, 100%, 0.9);
  border-color: #dce6f1;
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
  height: 150px;
  background: #eef3f1;
  border-radius: 0.3rem;
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
    margin-right: 0.9rem;
    margin-top: 2rem;
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
  width: 100%;
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
  }
  @media (max-width: 768px) {
    width: 40%;
    margin-right: 0.5rem;

    button {
      font-size: 0.7rem;
    }
  }
`;
