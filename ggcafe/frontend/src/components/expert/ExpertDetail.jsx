import React from "react";
import styled from "styled-components";

const StyledDetail = styled.div`
  html {
    font-size: 10px;
  }

  .container {
    margin: 0%;
    padding: 0%;
  }

  .expertInfo {
    display: flex;
    margin: 1.2rem 1.2rem;
  }

  .expertInfo .expertBox {
    text-align: center;
  }

  .expertInfo .expertBox .picture img {
    width: 30rem;
  }

  .expertInfo .expertBox .nameBox {
    display: flex;
  }

  .expertInfo .expertBox .nameBox .name {
    width: 70%;
    font-size: 1.8rem;
    font-weight: 600;
  }

  .expertInfo .expertBox .nameBox .buttonBox {
    display: flex;
    width: 30%;
    justify-content: flex-end;
    text-decoration: none;
    font-size: 2rem;
  }

  .specBox {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  .specBox .mainTitle {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }

  .specBox .spec {
    display: flex;
    margin: 1.2rem 1.2rem;
    margin-top: 2.4rem;
  }

  .specBox .spec .career {
    width: 50%;
  }

  .specBox .spec .career .title {
    font-size: 1.4rem;
  }

  .specBox .spec .education {
    width: 50%;
  }

  .specBox .spec .education .title {
    font-size: 1.4rem;
  }

  .counselInfo {
    display: flex;
    margin: 1.2rem 1.2rem;
  }

  .counselInfo .index {
    width: 15%;
    font-size: 1.6rem;
  }

  .counselInfo .Box {
    width: 75%;
    display: flex;
    flex-direction: column;
  }

  .counselInfo .Box .descriptionBox {
    display: flex;
  }

  .counselInfo .Box .descriptionBox .title {
    width: 35%;
  }

  .counselInfo .Box .descriptionBox .description {
    width: 100%;
    text-align: left;
  }
`;

const ExpertDetail = (info) => {
  const {
    id,
    name,
    urlToImage,
    summary,
    career,
    education,
    description,
    effectOfCounselling,
    howToCounselling,
  } = info.info;

  const handleClickToMatch = (event) => {
    event.preventDefault();
    window.sessionStorage.setItem("expertId", id);
    window.location.href = `/match/${id}`;
  };

  return (
    <StyledDetail>
      <div className="container">
        <div className="expertInfo">
          <div className="expertBox">
            <div className="picture">
              <img src={urlToImage} alt="expertPicture" />
            </div>
            <div className="nameBox">
              <div className="name">{name}</div>
              <button type="submit" onClick={handleClickToMatch}>
                신청하기
              </button>
            </div>
          </div>
          <div className="specBox">
            <div className="mainTitle">{summary}</div>
            <div className="spec">
              <div className="career">
                <div className="title">경력</div>
                <div className="description">{career}</div>
              </div>
              <div className="education">
                <div className="title">학력</div>
                <div className="description">{education}</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="counselInfo">
          <div className="index">소개</div>
          <div className="Box">
            <div className="descriptionBox">
              <div className="title">심리상담을 주저하시는 분에게</div>
              <div className="description">{description}</div>
            </div>
            <hr />

            <div className="descriptionBox">
              <div className="title">상담사님과의 심리상담 효과</div>
              <div className="description">{effectOfCounselling}</div>
            </div>
            <hr />

            <div className="descriptionBox">
              <div className="title">상담사님의 심리상담 방식</div>
              <div className="description">{howToCounselling}</div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </StyledDetail>
  );
};

export default ExpertDetail;
