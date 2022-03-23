// Libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header & Footer
import Header from "./components/Header";
import Footer from "./components/Footer";

// Section Components
import Home from "./components/Home";
// 공감 일기장
import Diary from "./components/Diary";
// 전문가 찾기
import MatchingList from "./components/MatchingList";
// 고객 센터
import Information from "./components/Information";
// 로그인
import SignIn from "./components/Signin";
// 회원가입
import SignUp from "./components/Signup";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/diary" element={<Diary />}></Route>
          <Route path="/matchinglist" element={<MatchingList />}></Route>
          <Route path="/information" element={<Information />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
