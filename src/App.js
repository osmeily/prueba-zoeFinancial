import React, { useEffect, useState }  from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import MatchList from "./components/MatchList";
import Navbar from "./components/Navbar";
import { AgentState } from "./Context";

function App() {
  const {state, dispatch} = AgentState()

  const url = "http://localhost:4000/data"

  const getData = async() => {
    const resp = await fetch(url)
    const data = await resp.json()
    dispatch({
      type: "FETCH_DATA",
      payload: data
    })
  }


  useEffect(() => {
  getData()
  }, [])
  

  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Landing data={state.agents}/>}/>
        <Route path="/match-list" element={ <MatchList/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
