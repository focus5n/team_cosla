import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Header CSS
const StyledHeader = styled.div`
  body {
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
    background-color: #e6ddd6;
    padding: 8px 12px;
  }

  /* --- Bar logo --- */
  .Header-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    color: #6f4b32;
    margin-left: 8px;
  }

  .Header-logo a {
    padding: 8px;
  }

  /* --- Bar menu --- */
  .Header-menu {
    display: flex;
    list-style: none;
    padding-left: 0%;
  }

  .Header-menu li {
    padding: 8px 12px;
  }

  .Header-menu li:hover {
    background-color: beige;
    border-radius: 4px;
  }

  /* --- Bar icons --- */
  .Header-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding-left: 0%;
  }

  .Header-icons a {
    padding: 8px 12px;
    color: #0c140e;
  }

  /* Bar toggle-button */
  .toggle-button {
    display: none;
  }

  /* --- flexible --- */
  @media screen and (max-width: 768px) {
    .Header {
      flex-direction: column;
    }

    /* --- Mobile Logo --- */
    .Header-logo {
      width: 100%;
      justify-content: center;
      align-items: center;
      padding: 8px 12px;
      margin: 0%;
    }

    .Header-logo a {
      display: none;
    }

    /* --- Mobile Menu --- */

    .Header-menu {
      display: none;
      flex-direction: column;
      width: 100%;
      padding: 8px 12px;
      padding-left: 0%;
      margin: 0%;
    }

    .Header-menu a {
      width: 100%;
      padding: 0%;
    }

    .Header-menu.active,
    .Header-icons.active {
      display: flex;
    }

    /* --- Mobile Icons --- */

    .Header-icons {
      display: none;
      justify-content: center;
      width: 100%;
    }

    .Header-icons.active {
      display: flex;
    }

    .toggle-button {
      display: block;
      position: absolute;
      font-size: 24px;
      right: 24px;
      color: #6f4b32;
    }
  }
`;

// toggle-button Event
function toggleMenu() {
  const toggleMenu = document.querySelector(".toggle-button");
  const menu = document.querySelector(".Header-menu");
  const icons = document.querySelector(".Header-icons");

  return toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
  });
}

function Header(props) {
  return (
    <StyledHeader>
      <div className="Header">
        {/* Logo */}
        <div className="Header-logo">
          <i className="fa-solid fa-mug-saucer"></i>
          <NavLink to="/">
            <p>공감 한 잔</p>
          </NavLink>
        </div>

        {/* Navigation Menu */}
        <ul className="Header-menu">
          <li>
            <NavLink to="/diary">공감 일기장</NavLink>
          </li>
          <li>
            <NavLink to="/expert">전문가 찾기</NavLink>
          </li>
          <li>
            <NavLink to="/column">전문가 칼럼</NavLink>
          </li>
          <li>
            <NavLink to="/counselling/">상담 받기</NavLink>
          </li>
          <li>
            <NavLink to="/information">고객센터</NavLink>
          </li>
          <li>
            <NavLink to="/signup">회원가입</NavLink>
          </li>
          <li>
            <NavLink to="/signin">로그인</NavLink>
          </li>
        </ul>

        {/* Navigation icons */}
        <ul className="Header-icons">
          <li>
            <NavLink to="/memberinfo">
              <i className="fa-solid fa-address-card"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/signout">
              <i className="fa-solid fa-right-from-bracket"></i>
            </NavLink>
          </li>
        </ul>

        {/* toggle-button */}
        <NavLink to="#" className="toggle-button" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </NavLink>
      </div>
    </StyledHeader>
  );
}

export default Header;
