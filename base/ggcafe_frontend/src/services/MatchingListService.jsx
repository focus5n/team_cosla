// Libraries
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

// Components
import MatchingsList from "../components/MatchingList";

// UI CSS
const MatchingListBlock = styled.div`
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
const MatchingListService = () => {
  const [matchingExpertInfo, setMatchingExpertInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/api/expert");
        setMatchingExpertInfo(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <MatchingListBlock>불러오는 중이에요!</MatchingListBlock>;
  }
  if (!matchingExpertInfo) {
    return null;
  }

  // API로 호출한 Data를 UI를 활용하여 출력
  return (
    <MatchingListBlock>
      {matchingExpertInfo.map((expertInfo) => {
        return <MatchingsList key={expertInfo.url} detail={expertInfo} />;
      })}
    </MatchingListBlock>
  );
};

export default MatchingListService;
