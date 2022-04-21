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
import DiaryList from "./components/diary/DiaryList";
import DiaryDetail from "./components/diary/DiaryDetail";
// 전문가 목록
import ExpertListService from "./services/expertService/ExpertListService";
// 전문가 상세정보
import ExpertDetailService from "./services/expertService/ExpertDetailService";
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
        <Routes path="/">
          <Route index path="" element={<Home />} />
          <Route path="diary" element={<Diary />} />
          <Route path="diarylist" element={<DiaryList />}></Route>
          <Route path="diarydetail" element={<DiaryDetail />}></Route>
          <Route path="column" element={<Column />} />
          <Route path="expert" element={<ExpertListService />} />
          <Route path="detail/:id" element={<ExpertDetailService />} />
          <Route path="counselling" element={<Counselling />} />
          <Route path="information" element={<Information />} />
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
