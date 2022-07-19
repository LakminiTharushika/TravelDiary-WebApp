import Header from "./components/Header";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "./components/Auth";
import TravelDiaries from "./components/TravelDiaries";
import UserTravelDiaries from "./components/UserTravelDiaries";
import DiaryDetails from "./components/DiaryDetails";
import AddDiary from "./components/AddDiary";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

function App() {

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  console.log(isLoggedIn);

  useEffect(() => { 
    if(localStorage.getItem("userId")){
      dispatch(authActions.login());

    }
  }, [dispatch ]);
  
  return <React.Fragment>
    <header>
      <Header/>
    </header>

    <main>
      
      <Routes>
      {!isLoggedIn ?
        <Route path = "/auth" element={<Auth/>} /> :
        <> 
        <Route path = "/traveldiaries" element={<TravelDiaries/>} />
        <Route path = "/myDiaries" element={<UserTravelDiaries/>} />
        <Route path = "/myDiaries/:id" element={<DiaryDetails/>} />
        <Route path = "/traveldiaries/add" element={<AddDiary/>} /> </>}

      </Routes> 
    </main>


  </React.Fragment>;

}

export default App;
