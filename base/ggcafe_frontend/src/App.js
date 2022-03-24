// Libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header & Footer
import Header from "./components/Header";
import Footer from "./components/Footer";

// Section Components
// 메인 화면
import Home from "./components/Home";
// 공감 일기장
import Diary from "./components/Diary";
// 전문가 목록
import MatchingListService from "./services/MatchingListService";
// 전문가 상세정보
import MatchingDetailService from "./services/MatchingDetailService";
// 전문가 칼럼
import Column from "./components/Column";
// 상담 받기
import Counselling from "./components/Counselling";
// 고객 센터
import Information from "./components/Information";
// 로그인
import SignIn from "./components/SignIn";
// 회원가입
import SignUp from "./components/SignUp";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/matchinglist" element={<MatchingListService />} />
          {/* 추후 matchinglist 안쪽으로 어떻게든 넣어봐 */}
          <Route path="/matchinglist/:id" element={<MatchingDetailService />} />
          <Route path="/column" element={<Column />}></Route>
          <Route path="/counselling" element={<Counselling />} />
          <Route path="/information" element={<Information />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
