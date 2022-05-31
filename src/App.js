import React, { useState, useEffect } from "react";
import About from "./components/About";
import FeelingsContainer from "./components/FeelingsContainer";


function App() {
  const [feelingData, setFeelingData] = useState({ feelings: [] });
 

  useEffect(() => {
    fetchFeelings()
  }, []);

  function fetchFeelings() {
    return fetch('http://localhost:3333/feelings')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setFeelingData(data);
      })
  }


 
  return (
    <div className="App">
      <About/>
      <FeelingsContainer feelings={feelingData}/>
     
    </div>
  );
}
export default App;
