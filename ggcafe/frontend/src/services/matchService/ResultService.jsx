import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Result from "../../components/match/Result";

export default function ResultService() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const id = useParams();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await axios.get(`http://localhost:10003/match/${id}`).then((res) => {
        console.log(res);
        setData(res.data);
      });

      console.log(data);
      setLoading(false);
    };
    fetch();
  }, [id]);

  if (loading) {
    return <h1>불러오는 중이에요!</h1>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      {data.map((info) => {
        return <Result key={info.email} info={info} />;
      })}
    </>
  );
}
