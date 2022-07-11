import Header from "./components/Header";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "./components/Auth";
import TravelDiaries from "./components/TravelDiaries";
import UserTravelDiaries from "./components/UserTravelDiaries";
import DiaryDetails from "./components/DiaryDetails";
import AddDiary from "./components/AddDiary";

function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>

    <main>
      <Routes>
        <Route path = "/auth" element={<Auth/>} />
        <Route path = "/traveldiaries" element={<TravelDiaries/>} />
        <Route path = "/myDiaries" element={<UserTravelDiaries/>} />
        <Route path = "/myDiaries/:id" element={<DiaryDetails/>} />
        <Route path = "/traveldiaries/add" element={<AddDiary/>} />
      </Routes>
    </main>


  </React.Fragment>;

}

export default App;
