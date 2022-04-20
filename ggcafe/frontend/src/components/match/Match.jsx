import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";

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
  // fields
  // url id
  const { id } = useParams();

  // user, expert
  const userName = window.sessionStorage.getItem("name");
  const { name: expertName } = props.info;

  // select purpose
  const purposeList = ["취업상담", "학업상담", "진로상담"];
  const [selectedPurpose, setSelectedPurpose] = useState("");

  // select means
  const meansList = ["화상상담", "채팅상담"];
  const [selectedMeans, setSelectedMeans] = useState("");

  // date
  const [startDate, setStartDate] = useState(new Date());

  // handlers
  // select purpose EventHandler
  const handleSelect = (event) => {
    event.preventDefault();
    setSelectedPurpose(event.target.value);
  };

  // select means EventHandler
  const handleMeans = (event) => {
    event.preventDefault();
    setSelectedMeans(event.target.value);
  };

  // submit EventHandler
  const handleSubmit = (event) => {
    event.preventDefault();
    <PostData />;
    window.location.href = `/result/${id}`;
  };

  // functions
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
        selected={startDate}
        onChange={(date) => setStartDate(date)}
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

  const PostData = () => {
    useEffect(() => {
      const pull = async () => {
        const pullData = await axios.post(`http://localhost:8082/match/${id}`);
      };
    }
    pull();
  }, []);

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
            <select onChange={handleSelect} value={selectedPurpose}>
              <PurposeOption />
            </select>
          </div>
          <div className="date">
            <div className="title">상담날짜</div>
            <Calendar />
          </div>
          <div className="means">
            <div className="title">상담방식</div>
            <select onChange={handleMeans} value={selectedMeans}>
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
