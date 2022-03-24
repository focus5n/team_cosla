import React, { useEffect, useState } from "react";
import MatchingDetail from "../components/MatchingDetail";
import axios from "axios";

const MatchingDetailService = ({ info }) => {
  const [expertInfo, setExpertInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      const response = axios.get("http://localhost:8080/api/expert");
      setExpertInfo(response.data);
      if (response === undefined) {
        console.log(response.data);
      } else {
        const response = axios.get("http://localhost:8080/api/expert");
        setExpertInfo(response.data);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // Loading 중일 때, 화면에 출력
  if (loading) {
    return <h2>불러오는 중이에요!</h2>;
  }
  if (!expertInfo) {
    return null;
  }

  return (
    <div>
      {console.log("가나다라")}
      {expertInfo.map((expertInfo) => {
        return <MatchingDetail key={expertInfo.url} info={expertInfo} />;
      })}
    </div>
  );
};

export default MatchingDetailService;
