import React from "react";
import styled from "styled-components";
import Icon from "../Icons/mlogo.png";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <NavLink to="/">
            <img src={Icon} alt="logo" />
          </NavLink>
        </Logo>

        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList>
              <div>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <img src="/images/nav-home.svg" alt="" />
                  <span>Home</span>
                </NavLink>
              </div>
            </NavList>

            <NavList>
              <div>
                <NavLink
                  to="/network"
                  style={{ textDecoration: "none" }}
                  activeClassName="active"
                >
                  <img src="/images/nav-network.svg" alt="" />
                  <span>My Network</span>
                </NavLink>
              </div>
            </NavList>

            <NavList>
              <div>
                <NavLink
                  to="/jobs"
                  style={{ textDecoration: "none" }}
                  activeClassName="active"
                >
                  <img src="/images/nav-jobs.svg" alt="" />
                  <span>Jobs</span>
                </NavLink>
              </div>
            </NavList>

            <NavList>
              <div>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </div>
            </NavList>

            <NavList>
              <div>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </div>
            </NavList>

            <Work>
              <div>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </div>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffff;

  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  padding: 0.3rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
  img {
    width: 45px;
  }
`;

const Search = styled.div`
  // padding-top: 0.5rem;
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
      outline: none;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  text-decoration: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      // border-color: rgba(0, 0, 0, 0.9);
      color: red;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  div {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    div {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  @media (max-width: 800px) {
    display: none;
  }
`;

const User = styled(NavList)`
  div > svg {
    width: 24px;
    border-radius: 50%;
  }

  div > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export default Header;
