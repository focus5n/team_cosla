// Libraries
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Components

const StyledHeader = styled.div`
  .body {
    margin: 0%;
  }

  a {
    text-decoration: none;
    color: #0c140e;
  }

  .Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #a97a5e;
    padding: 8px 12px;
  }

  .Header .Header-logo {
    font-size: 24px;
    color: aqua;
  }
`;
function Header(props) {
  return (
    <StyledHeader>
      <div className="Header">
        {/* Logo */}
        <div className="Header-logo">
          <NavLink to="/">
            <i className="fa-solid fa-mug-saucer"></i>
            공감 한 잔
          </NavLink>
        </div>

        {/* Navigation Menu */}
        <ul className="Header-menu">
          <li>
            <NavLink to="/diary">공감 일기장</NavLink>
          </li>
          <li>
            <NavLink to="/matching">전문가 찾기</NavLink>
          </li>
          <li>
            <NavLink to="/counselling">상담 시작하기</NavLink>
          </li>
          <li>
            <NavLink to="/column">전문가 칼럼</NavLink>
          </li>
          <li>
            <NavLink to="/information">고객센터</NavLink>
          </li>
        </ul>

        {/* Navigation Icons */}
        <div className="Header-icons">
          <NavLink to="/memberinfo">
            <i className="fa-solid fa-address-card"></i>
          </NavLink>
          <NavLink to="/signout">
            <i className="fa-solid fa-right-from-bracket"></i>
          </NavLink>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
