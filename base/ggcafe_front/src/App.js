// Libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header & Footer Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Section Components
import Home from "./components/Home";
import Diary from "./components/Diary";
import Matching from "./components/Matching";
import Information from "./components/Information";

// CSS
import "./App.css";
import SignIn from "./components/signin";
import SignUp from "./components/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/diary" element={<Diary />}></Route>
          <Route path="/matching" element={<Matching />}></Route>
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
