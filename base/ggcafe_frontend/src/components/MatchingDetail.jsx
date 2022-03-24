import React from "react";
import styled from "styled-components";

const StyledDetail = styled.div`
  * {
    margin: 0%;
    padding: 0%;
  }

  .container1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .container2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const MatchingDetail = ({ info }) => {
  const {
    name,
    urlToImage,
    summary: title,
    career,
    education,
    description,
    effectOfCounselling,
    howToCounselling,
  } = info;

  return (
    <StyledDetail>
      <div className="container1">
        <div className="expert">
          <img
            className="image"
            src={require({ urlToImage })}
            alt="thumbnail"
          />
          <div className="name">{name}</div>
        </div>
        <div className="personal">
          <div className="title">{title}</div>
          <div className="spec">
            <div className="career">{career}</div>
            <div className="education">{education}</div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="introduction-title"></div>
        <div className="introduction-detail">
          <div className="part">
            <div className="title">심리상담을 망설이는 분에게</div>
            <div className="description">{description}</div>
          </div>
          <div className="part">
            <div className="title">상담사님과의 심리상담 효과</div>
            <div className="description">{effectOfCounselling}</div>
          </div>
          <div className="part">
            <div className="title">상담사님의 심리상담 방법</div>
            <div className="description">{howToCounselling}</div>
          </div>
        </div>
      </div>
    </StyledDetail>
  );
};

export default MatchingDetail;
