import styled from 'styled-components';

const ExpertItemContainer = styled.div`
  * {
    margin: 0;
  }
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      margin: 0;
      display: block;
      width: 160px;
      height: 160px;
      object-fit: cover;
      object-position: 50% 50%;
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

const ExpertItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <ExpertItemContainer>
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
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </ExpertItemContainer>
  );
};

export default ExpertItem;
