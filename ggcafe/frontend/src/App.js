// Libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Section Components
// main service
// Home
import Home from "./components/home/Home";
// Header
import Header from "./components/home/Header";
// Footer
import Footer from "./components/home/Footer";

// diary service
// 공감 일기장
import Diary from "./components/diary/Diary";
import DiaryList from "./components/diary/DiaryList";
import DiaryDetail from "./components/diary/DiaryDetail";

// expert service
// 전문가 목록
import ExpertListService from "./services/expertService/ExpertListService";
// 전문가 상세정보
import ExpertDetailService from "./services/expertService/ExpertDetailService";

// match service
// 매칭
import MatchService from "./services/matchService/MatchService";

// counsel service
// 상담 받기
import Counseling from "./components/counseling/Counseling";
// 상담 받은 이후 정리
import AfterCounsel from "./components/counseling/AfterCounsel";
// 상담 기록 하기
import WriteCounselCard from "./components/counseling/WriteCounselCard";

// user service
// 로그인
import SignIn from "./components/auth/SignIn";
// 회원가입
import SignUp from "./components/auth/SignUp";
// 로그인 콜백
import Login from "./components/auth/Login";
// 로그아웃
import SignOut from "./components/auth/SignOut";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes path="/">
          {/* 메인화면 */}
          <Route index path="" element={<Home />} />
          {/* 일기장 */}
          <Route path="diary" element={<Diary />} />
          <Route path="diarylist" element={<DiaryList />} />
          <Route path="diarydetail" element={<DiaryDetail />} />
          {/* 전문가 */}
          <Route path="expert" element={<ExpertListService />} />
          <Route path="detail/:id" element={<ExpertDetailService />} />
          {/* 매치 */}
          <Route path="match/:id" element={<MatchService />} />
          {/* 상담 */}
          <Route path="/counseling" element={<Counseling />} />
<<<<<<< HEAD:ggcafe/frontend/src/App.js
          <Route path="/writecounselcard" element={<WriteCounselCard />} />
          <Route path="/aftercounsel" element={<AfterCounsel />} />
          {/* 로그인 */}
=======
          <Route path="/writecounselcard" element={<WriteCounselCard/>} />
          <Route path="/counseling/aftercounsel" element={<AfterCounsel />} />
          <Route path="/information" element={<Information />} />
>>>>>>> 874f0938639050a098f86bfe24cb93e2344069ca:base/ggcafe_frontend/src/App.js
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/callback/kakao" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
