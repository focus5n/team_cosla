import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const StyledMatch = styled.div`
  .container {
    display: flex;
    justify-content: center;
  }

  .box {
    display: flex;
    width: 100rem;
    min-height: 50vmin;
  }

  .user {
    display: flex;
    flex-direction: column;
  }
`;

function Match(props) {
  //// Fields
  // url id
  const { id } = useParams();

  // user, expert
  const userName = window.sessionStorage.getItem("name");
  const userEmail = window.sessionStorage.getItem("email");
  const { name: expertName, email: expertEmail } = props.info;

  // select purpose
  const purposeList = ["취업상담", "학업상담", "진로상담"];
  const [matchPurpose, setSelectedPurpose] = useState("취업상담");

  // select means
  const meansList = ["화상상담", "채팅상담"];
  const [matchType, setSelectedMeans] = useState("화상상담");

  // date
  const [matchDate, setMatchDate] = useState(new Date());

  //// Handlers
  // select purpose EventHandler
  const handleSelect = (event) => {
    // event.preventDefault();
    console.log(matchPurpose);
    setSelectedPurpose(event.target.value);
    console.log(matchPurpose);
  };

  // select means EventHandler
  const handleMeans = (event) => {
    event.preventDefault();
    setSelectedMeans(event.target.value);
  };

  // submit EventHandler
  const handleSubmit = (event) => {
    axios
      .post(`http://localhost:10003/match`, {
        id,
        userName,
        userEmail,
        expertName,
        expertEmail,
        matchPurpose,
        matchType,
        matchDate,
      })
      .then((res) => {
        console.log(res);
      });
    event.preventDefault();
    // window.location.href = `/result/${id}`;
  };

  //// Functions
  // select purpose function
  const PurposeOption = () => {
    return purposeList.map((item) => (
      <option value={item} key={item}>
        {item}
      </option>
    ));
  };

  // date function
  const Calendar = () => {
    return (
      <DatePicker
        selected={matchDate}
        onChange={(date) => setMatchDate(date)}
        minDate={new Date()}
      />
    );
  };

  // select means function
  const MeansOption = () => {
    return meansList.map((item) => (
      <option value={item} key={item}>
        {item}
      </option>
    ));
  };

  return (
    <StyledMatch>
      <div className="container">
        <div className="box">
          <div className="user">
            <div className="title">내담자</div>
            <div className="name">{userName}</div>
          </div>
          <div className="expert">
            <div className="title">전문가</div>
            <div className="name">{expertName}</div>
          </div>
          <div className="purpose">
            <div className="title">상담목적</div>
            <select onChange={handleSelect} value={matchPurpose}>
              <PurposeOption />
            </select>
          </div>
          <div className="date">
            <div className="title">상담날짜</div>
            <Calendar />
          </div>
          <div className="means">
            <div className="title">상담방식</div>
            <select onChange={handleMeans} value={matchType}>
              <MeansOption />
            </select>
          </div>
          <div className="button">
            <button type="submit" onClick={handleSubmit}>
              확정하기
            </button>
          </div>
        </div>
      </div>
    </StyledMatch>
  );
}

export default Match;
