import axios from "axios";
import React, { useEffect, useState } from "react";
import ExpertList from "../../components/expert/ExpertList";

const ExpertListService = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/expert");
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>불러오는 중이에요!</h1>;
  }
  if (!data) {
    return null;
  }

  return (
    <div>
      {data.map((info) => {
        return <ExpertList key={info.urlToImage} info={info} />;
      })}
    </div>
  );
};

export default ExpertListService;
