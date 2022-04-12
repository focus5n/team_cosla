import React from "react";
import styled from "styled-components";

const StyledList = styled.div`
  html {
    font-size: 10px;
  }

  .box {
    display: flex;
    width: 50rem;
  }

  .cardLink {
    text-decoration: none;
    color: inherit;
  }

  .card {
    display: flex;
    margin: 3.6rem 3.6rem;
    width: 40rem;
    height: 18.75rem;
    border-radius: 0.4rem;
    box-shadow: 2px 2px 2px;
  }

  .card .imgBox {
    width: 11.72rem;
  }

  .card .imgBox img {
    width: 11.72rem;
    height: 18.75rem;
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
  }

  .card .contentBox {
    display: flex;
    flex-direction: column;
    width: 28.28rem;
  }

  .card .contentBox .description {
    width: 28.28rem;
    height: 11.72rem;
    font-size: 1.4rem;
    padding: 1.2rem 1.2rem;
    line-height: 2.4rem;
  }

  .card .contentBox .information {
    width: 28.28rem;
    height: 7.03rem;
    display: flex;
    padding: 1.2rem 1.2rem;
  }

  .card .contentBox .information .nameBox {
    width: 50%;
  }

  .card .contentBox .information .nameBox .title {
    color: #bdbdbd;
  }

  .card .contentBox .information .nameBox .name {
    font-size: 1.6rem;
  }

  .card .contentBox .information .counselBox {
    width: 50%;
  }

  .card .contentBox .information .counselBox .title {
    color: #bdbdbd;
  }

  .card .contentBox .information .counselBox .counsel {
    font-size: 1.6rem;
  }
`;

const ExpertList = ({ info }) => {
  const { id, urlToImage, name, summary } = info;

  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = `/detail/${id}`;
    console.log({ id });
  };

  return (
    <StyledList className="box">
      <div className="card">
        <div className="imgBox">
          <img src={urlToImage} alt="ExpertFeature" />
        </div>
        <div className="contentBox">
          <div className="description">{summary}</div>
          <div className="information">
            <div className="nameBox">
              <div className="title">이름</div>
              <div className="name">{name}</div>
            </div>
            <div className="infoBox">
              <div className="title">전문가 정보</div>
              <div className="counsel">
                <input type="submit" value="상세정보" onClick={handleClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledList>
  );
};

export default ExpertList;
