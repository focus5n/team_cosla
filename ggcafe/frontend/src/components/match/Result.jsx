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

const Info = (props) => {
  return (
    <>
      <div className="name">
        <div className="userName">{props.userName}</div>
        <div className="expertName">{props.expertName}</div>
      </div>
      <div className="detail">
        <div className="purpose">{props.matchPurpose}</div>
        <div className="type">{props.matchType}</div>
      </div>
      <div className="date">
        <div className="matchDate">{props.matchDate}</div>
      </div>
    </>
  );
};

// Function
function Result(props) {
  const { matchPurpose, matchType, userName, expertName, matchDate } =
    props.Info;

  return (
    <StyledResult>
      <div className="container">
        <div className="card">
          <Header />
          <div className="infoBox">
            <Info props={props.info} />
          </div>
        </div>
      </div>
    </StyledResult>
  );
}

export default Result;
