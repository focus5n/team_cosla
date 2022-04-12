import React from "react";
import styled from "styled-components";

const StyledDetail = styled.div`
  * {
    margin: 0%;
    padding: 0%;
  }

  html {
    font-size: 10px;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 108rem;
    background-color: aliceblue;
  }

  .expertInfo {
    display: flex;
    flex-direction: column;
  }

  .expertInfo .expert {
    display: flex;
    flex-direction: column;
    background-color: yellowgreen;
  }

  .expertInfo .expert .picture {
    background-color: bisque;
  }

  .expertInfo .expert .picture img {
    width: 20%;
  }

  .expertInfo .specBox {
    display: flex;
    background-color: blanchedalmond;
  }

  .expertInfo .specBox .spec {
    display: flex;
  }

  .expertInfo .specBox .spec .career {
    display: flex;
  }

  .expertInfo .specBox .spec .career .title {
    font-size: 18px;
    font-weight: 600;
  }

  .expertInfo .specBox .spec .career .description {
    font-size: 16px;
  }

  .expertInfo .specBox .spec .education {
    display: flex;
  }

  .expertInfo .specBox .spec .education .title {
    font-size: 18px;
    font-weight: 600;
  }

  .expertInfo .specBox .spec .career .description {
    font-size: 16px;
  }

  .counselInfo {
    display: flex;
  }

  .counselInfo .index {
    font-size: 18px;
    font-weight: 600;
  }

  .counselInfo .Box {
    display: flex;
  }

  .counselInfo .Box .descriptionBox {
    display: flex;
  }

  .counselInfo .Box .descriptionBox .title {
    font-size: 17px;
    font-weight: 550;
  }

  .counselInfo .Box .descriptionBox .description {
    font-size: 16px;
  }
`;

const ExpertDetail = (info) => {
  return (
    <StyledDetail>
      <div className="container">
        <div className="expertInfo">
          <div className="expert">
            <div className="picture">
              <img src={info.info.urlToImage} alt="expertPicture" />
            </div>
            <div className="name">{info.info.name}</div>
            <div className="specBox">
              <div className="mainTitle">{info.info.title}</div>
              <div className="spec">
                <div className="career">
                  <div className="title">경력</div>
                  <div className="description">{info.info.career}</div>
                </div>
                <div className="education">
                  <div className="title">학력</div>
                  <div className="description">{info.info.education}</div>
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
                <div className="description">{info.info.description}</div>
              </div>
              <div className="descriptionBox">
                <div className="title">상담사님과의 심리상담 효과</div>
                <div className="description">
                  {info.info.effectOfCounselling}
                </div>
              </div>
              <div className="descriptionBox">
                <div className="title">상담사님의 심리상담 방식</div>
                <div className="description">{info.info.howToCounselling}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledDetail>
  );
};

export default ExpertDetail;
