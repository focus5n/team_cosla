// Libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header & Footer
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";

// Section Components
// 메인 화면
import Home from "./components/home/Home";
// 공감 일기장
import Diary from "./components/diary/Diary";
// 전문가 목록
import ExpertListService from "./services/expertService/ExpertListService";
// 전문가 상세정보
<<<<<<< HEAD
import MatchingDetailService from "./services/matchingService/MatchingDetailService";
// 일정 선택
import Calendar from "./components/matching/Calendar";
=======
import ExpertDetailService from "./services/expertService/ExpertDetailService";
>>>>>>> 8b420b3ea16ffc1ce372e4f37f8e883e386185ee
// 전문가 칼럼
import Column from "./components/column/Column";
// 상담 받기
import Counselling from "./components/counselling/Counselling";
// 고객 센터
import Information from "./components/information/Information";
// 로그인
import SignIn from "./components/auth/SignIn";
// 회원가입
import SignUp from "./components/auth/SignUp";
// 로그인 콜백
import Login from "./components/auth/Login";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/matchinglist" element={<MatchingListService />} />
          <Route
            path="/matchingdetail/:id"
            element={<MatchingDetailService />}
          />
          <Route path="/schedule" element={<Calendar />} />
          <Route path="/column" element={<Column />} />
          <Route path="/counselling" element={<Counselling />} />
          <Route path="/information" element={<Information />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/callback/kakao" element={<Login />}></Route>
=======
        <Routes path="/">
          <Route index path="" element={<Home />} />
          <Route path="diary" element={<Diary />} />
          <Route path="column" element={<Column />} />
          <Route path="expert" element={<ExpertListService />} />
          <Route path="detail/:id" element={<ExpertDetailService />} />
          <Route path="counselling" element={<Counselling />} />
          <Route path="information" element={<Information />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="callback/kakao" element={<Login />}></Route>
>>>>>>> 8b420b3ea16ffc1ce372e4f37f8e883e386185ee
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
