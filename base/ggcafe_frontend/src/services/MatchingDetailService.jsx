import axios from "axios";
import React, { useEffect, useState } from "react";
import MatchingDetail from "../components/MatchingDetail";

function MatchingDetailService(props) {
  const [expertInfo, setExpertInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/api/expert");
      setExpertInfo(response.data);
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
      {expertInfo.map((expertInfo) => {
        return <MatchingDetail key={expertInfo.url} info={expertInfo} />;
      })}
    </div>
  );
}

export default MatchingDetailService;
