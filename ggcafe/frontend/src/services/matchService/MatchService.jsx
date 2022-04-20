import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Match from "../../components/match/Match";

function MatchService(props) {
  const [data, setData] = useState(null);
  const { id } = useParams();

  // 전문가 정보 불러오기
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`http://localhost:8080/expert/${id}`);
      setData(response.data);
    };
    fetch();
  }, [id]);

  if (!data) {
    return null;
  }

  return <Match key={data.urlToImage} info={data}></Match>;
}

export default MatchService;
