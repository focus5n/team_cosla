// Libraries
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

// Components
import ExpertItem from "./ExpertItem";

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

const ExpertList = () => {
  const [experts, setExperts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines" +
            "?country=kr&apiKey=0c26f7a177e5434b9e719449d2dc0e97"
        );
        setExperts(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <ExpertListBlock>대기 중...</ExpertListBlock>;
  }
  if (!experts) {
    return null;
  }

  return (
    <ExpertListBlock>
      {experts.map((experts) => {
        return <ExpertItem key={experts.url} article={experts} />;
      })}
    </ExpertListBlock>
  );
};

export default ExpertList;
