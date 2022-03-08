import React, { useEffect, useState }  from "react"
import Landing from "./components/Landing";

function App() {
  
  const [givenData, setGivenData] = useState()
  const url = "http://localhost:4000/data"

  const getData = async() => {
    const resp = await fetch(url)
    const data = await resp.json()
    setGivenData(data)
  }

  console.log(givenData)

  useEffect(() => {
  getData()
  }, [])
  

  return (
    <div className="App">
      <Landing data={givenData}/>
    </div>
  );
}

export default App;
