// Libraries
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Components
import ExpertItem from './ExpertItem';

// UI CSS
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

// API 호출 && API 상태 검증 && 원하는 Data 획득
const ExpertList = () => {
  const [experts, setExperts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines' +
            '?country=kr&apiKey=0c26f7a177e5434b9e719449d2dc0e97',
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
    return <ExpertListBlock>불러오는 중이에요!</ExpertListBlock>;
  }
  if (!experts) {
    return null;
  }

  // API로 호출한 Data를 UI를 활용하여 출력
  return (
    <ExpertListBlock>
      {experts.map((experts) => {
        return <ExpertItem key={experts.url} article={experts} />;
      })}
    </ExpertListBlock>
  );
};

export default ExpertList;
