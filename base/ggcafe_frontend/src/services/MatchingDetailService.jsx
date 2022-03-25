// Libraries
import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import MatchingDetail from "../components/MatchingDetail";

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
    <div>
      {console.log(expertInfo)}
      {expertInfo.map((Info) => {
        return <MatchingDetail key={Info.id} info={Info} />;
      })}
    </div>
  );
};

export default MatchingDetailService;
