/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ExpertDetail from "../../components/expert/ExpertDetail";

const ExpertDetailService = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log(id);
      const response = await axios.get(`http://localhost:10002/expert/${id}`);
      setData(response.data);
      console.log(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <h1>불러오는 중이에요!</h1>;
  }
  if (!data) {
    return null;
  }

  return (
    <div>
      {console.log(data)}
      <ExpertDetail key={data.urlToImage} info={data} />
    </div>
  );
};

export default ExpertDetailService;
