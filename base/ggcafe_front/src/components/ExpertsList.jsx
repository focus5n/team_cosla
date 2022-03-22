import React from 'react';
import styled from 'styled-components';

// UI CSS
const MatchingItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      margin: 0;
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
        color: #333;
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
const MatchingList = ({ detail }) => {
  const { title: name, description: summary, url, urlToImage } = detail;
  return (
    <MatchingItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail"></img>
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h2>
        <p>{summary}</p>
      </div>
    </MatchingItemBlock>
  );
};

export default MatchingList;
