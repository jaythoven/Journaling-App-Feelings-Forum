import React, { useState, useEffect } from "react";
import About from "./components/About";
import FeelingsContainer from "./components/FeelingsContainer";
import Form from "./components/Form";


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

  function handleUpdateFeeling(updatedFeeling) {
    const updatedFeelings = feelingData.map((feeling) => feeling.id === updatedFeeling.id ? updatedFeeling : feeling);
    setFeelingData(updatedFeelings);
  }
 
  return (
    <div className="App">
      <About/>
      <FeelingsContainer feelings={feelingData} handleUpdateFeeling={handleUpdateFeeling} />
      <Form setFeelingData={setFeelingData} />
    </div>
  );
}
export default App;
