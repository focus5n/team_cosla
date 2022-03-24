import React from "react";
// import styled from "styled-components";

// const StyledDetail = styled.div`
//   * {
//     margin: 0%;
//   }
// `;

const MatchingDetail = ({ info }) => {
  const { summary: title, description, url, urlToImage } = info;

  return (
    <MatchingDetail>
      <div className="Container">
        <div className="expert">
          <div className="name">{title}</div>
          <div className="image"></div>
        </div>
        <div className="personal">
          <div className="title"></div>
          <div className="spec">
            <div className="career"></div>
            <div className="education"></div>
          </div>
        </div>
      </div>
      <div className="Container">
        <div className="introduction-title"></div>
        <div className="introduction-detail">
          <div className="part"></div>
          <div className="part"></div>
          <div className="part"></div>
        </div>
      </div>
    </MatchingDetail>
  );
};

export default MatchingDetail;
