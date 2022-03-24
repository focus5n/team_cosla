import React from "react";
import styled from "styled-components";

const StyledMatchingList = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 100px;
      height: 140px;
      object-fit: cover;
      border-radius: 4px;
    }
  }
  .contents {
    h2 {
      margin: 0;
      text-align: left;

      a {
        text-decoration: none;
        color: black;
      }
    }
    p {
      margin-left: 0%;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
      text-align: left;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const MatchingList = ({ detail }) => {
  const { summary: title, description, url, urlToImage } = detail;

  return (
    <StyledMatchingList>
      <div className="thumbnail">
        <NavLink to={url} target="_blank" rel="noopener noreferrer">
          <img src={require({ urlToImage })} alt="thumbnail" />
        </NavLink>
      </div>
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description} 나중에 url 확인해서 url 추가하는 로직 짤 것</p>
        <p>{urlToImage} 이건 urlToImage 확인용도</p>
      </div>
    </StyledMatchingList>
  );
};

export default MatchingList;
