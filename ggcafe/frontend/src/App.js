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

// expert service
// 전문가 목록
import ExpertListService from "./services/expertService/ExpertListService";
// 전문가 상세정보
import ExpertDetailService from "./services/expertService/ExpertDetailService";

// match service
// 매칭
import MatchService from "./services/matchService/MatchService";
// 매칭 결과
import Result from "./components/match/Result";

// user service
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
        <Routes path="/">
          {/* 메인화면 */}
          <Route index path="" element={<Home />} />
          {/* 일기장 */}
          <Route path="diary" element={<Diary />} />
          {/* 전문가 */}
          <Route path="expert" element={<ExpertListService />} />
          <Route path="detail/:id" element={<ExpertDetailService />} />
          {/* 매치 */}
          <Route path="match/:id" element={<MatchService />} />
          <Route path="result/:id" element={<Result />} />
          {/* 로그인 */}
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="callback/kakao" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
