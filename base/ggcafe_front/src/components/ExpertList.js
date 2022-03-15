import React from "react";
import styled from "styled-components";

import ExpertItem from "./components/ExpertItem";

const ExpertListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "http://ggoreb.com",
  urlToImage: "https://via.placeholder.com/160",
};

const ExpertList = () => {
  return (
    <ExpertListBlock>
      <ExpertItem article={sampleArticle} />
      <ExpertItem article={sampleArticle} />
      <ExpertItem article={sampleArticle} />
    </ExpertListBlock>
  );
};

export default ExpertItem;
