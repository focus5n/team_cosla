import React from 'react';
import { NavLink } from '../../node_modules/react-router-dom/index';

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div>
          <ul>
            <li>
              <NavLink to="/board" className="navbar-brand">
                공감 일기장
              </NavLink>
            </li>
            <li>
              <NavLink to="/experts" className="navbar-brand">
                전문가 찾기
              </NavLink>
            </li>
            <li>
              <NavLink to="/column" className="navbar-brand">
                전문가 칼럼
              </NavLink>
            </li>
            <li>
              <NavLink to="/counseling" className="navbar-brand">
                상담하기
              </NavLink>
            </li>
            <li>
              <NavLink to="/memberinfo" className="navbar-brand">
                회원정보
              </NavLink>
            </li>
            <li>
              <NavLink to="/signout" className="navbar-brand">
                로그아웃
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
