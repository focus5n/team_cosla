import React from "react";
import styled from "styled-components";

// CSS
const StyledResult = styled.div`
  .container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .card {
    display: flex;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid blanchedalmond;
  }

  .card .info {
  }
`;

// Parts

const Header = () => {
  return (
    <div className="header">
      <div className="cafeName">공감 한 잔</div>
    </div>
  );
};

const Info = () => {
  return (
    <>
      <div className="name">
        <div className="userName">{userName}</div>
        <div className="expertName">{expertName}</div>
      </div>
      <div className="detail">
        <div className="purpose">{matchPurpose}</div>
        <div className="type">{matchType}</div>
      </div>
    </>
  );
};

const Date = () => {
  return (
    <div className="date">
      <div className="matchDate">{matchDate}</div>
    </div>
  );
};

// Function
function Result(props) {
  const { matchPurpose, matchType, userName, expertName, matchDate } =
    props.data;

  return (
    <StyledResult>
      <div className="container">
        <div className="card">
          <Header />
          <div className="infoBox">
            <Info />
            <Date />
          </div>
        </div>
      </div>
    </StyledResult>
  );
}

export default Result;
