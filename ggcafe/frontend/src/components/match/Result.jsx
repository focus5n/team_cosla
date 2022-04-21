import React from "react";
import styled from "styled-components";

// CSS
const StyledResult = styled.div`
  .container {
    display: flex;
  }
`;

// Parts
const Picture = () => {
  return <div className="picture">{urlToImage}</div>;
};

const Detail = () => {
  return (
    <div className="detail">
      <div className="purpose">{matchPurpose}</div>
      <div className="type">{matchType}</div>
    </div>
  );
};

const Name = () => {
  return (
    <div className="name">
      <div className="userName">{userName}</div>
      <div className="expertName">{expertName}</div>
    </div>
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
  const {
    urlToImage,
    matchPurpose,
    matchType,
    userName,
    expertName,
    matchDate,
  } = props.data;

  return (
    <StyledResult>
      <div className="container">
        <div className="card">
          <div className="image">
            <Picture />
          </div>
          <div className="info">
            <Name />
            <Detail />
            <Date />
          </div>
        </div>
      </div>
    </StyledResult>
  );
}

export default Result;
