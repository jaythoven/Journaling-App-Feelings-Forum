import React, { useState, useEffect } from "react";
import About from "./components/About";
import FeelingsContainer from "./components/FeelingsContainer";
import Form from "./components/Form";
import NavBar from "./components/NavBar"

function App() {
  const [feelingData, setFeelingData] = useState({ feelings: [] });
 

  useEffect(() => {
    fetchFeelings()
  }, []);

  function fetchFeelings() {
    return fetch('http://localhost:3000/feelings')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setFeelingData(data);
      })
  }


 
  return (
    <div className="App">
      <NavBar />
      <About/>
      <FeelingsContainer feelings={feelingData}/>
      <Form setFeelingData={setFeelingData} />
    </div>
  );
}
export default App;
