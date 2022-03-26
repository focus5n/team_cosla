import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

// Components
import MatchingDetail from "../../components/matching/MatchingDetail";

const MatchingDetailBlock = styled.div`
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

const MatchingDetailService = ({ info }) => {
  const [expertInfo, setExpertInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      const response = axios.get("http://localhost:8080/api/expert");
      setExpertInfo(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Loading 중일 때, 출력하는 화면
  if (loading) {
    return <h2>불러오는 중이에요!</h2>;
  }
  if (!expertInfo) {
    return null;
  }

  return (
    <MatchingDetailBlock>
      {console.log(expertInfo)}
      {expertInfo.map((Info) => {
        return <MatchingDetail key={Info.id} info={Info} />;
      })}
    </MatchingDetailBlock>
  );
};

export default MatchingDetailService;
