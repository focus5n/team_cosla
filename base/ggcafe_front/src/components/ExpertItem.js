import React from "react";
import styled from "styled-components";

// UI CSS
const ExpertItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 160px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

// UI에 Data 할당
const ExpertItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <ExpertItemBlock>
      <div className="thumbnail">
        <a href={url} target="_blank" rel="noreferrer">
          <img src={urlToImage} alt="thumbnail" />
        </a>
      </div>
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </ExpertItemBlock>
  );
};

export default ExpertItem;
