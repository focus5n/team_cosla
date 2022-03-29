import React from "react";
import styled from "styled-components";

const StyledDetail = styled.div`
  * {
    margin: 0%;
    padding: 0%;
  }

  // 전문가 개인정보
  .container1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .container1 .expert {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }
  .container1 .expert .image {
    width: 160px;
    height: 200px;
    border-radius: 4px;
    border: 4px solid greenyellow;
  }
  .container1 .expert .name {
    font-size: 20px;
    font-weight: 550;
  }
  .container1 .personal {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    text-align: left;
  }
  .container1 .personal .title {
    font-size: 24px;
    font-weight: 600;
  }
  .container1 .personal .career {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    text-align: left;
  }
  .container1 .personal .career .title {
    font-size: 20px;
    font-weight: 550;
  }
  .container1 .personal .career .detail {
    font-size: 18px;
    font-weight: 500;
  }

  //전문가 상담소개
  .container2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
  .container2 .introduction {
    width: 30%;
    font-size: 24px;
    font-weight: 600;
  }
  .container2 .detail {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
  .container2 .detail .part {
    display: flex;
    flex-direction: row;
    justify-content: baseline;
  }
  .container2 .detail .part .title {
    font-size: 20px;
    font-weight: 550;
  }
  .container2 .detail .part .description {
    font-size: 16px;
    font-weight: 500;
  }
`;

function MatchingDetail(info) {
  const {
    // eslint-disable-next-line no-unused-vars
    id,
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
          <img className="image" src={urlToImage} alt="thumbnail" />
          <div className="name">{name}</div>
        </div>
        <div className="personal">
          <div className="title">{title}</div>
          <div className="spec">
            <div className="career">
              <div className="title">경력</div>
              <div className="detail">{career}</div>
            </div>
            <div className="education">
              <div className="title">학력</div>
              <div className="detail">{education}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="introduction">소개</div>
        <div className="detail">
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
}

export default MatchingDetail;
