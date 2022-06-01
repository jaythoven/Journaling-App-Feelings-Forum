import React, { useState, useEffect } from "react";
import About from "./components/About";
import FeelingsContainer from "./components/FeelingsContainer";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import {Switch, Route} from "react-router-dom";




function App() {
  const [feelingData, setFeelingData] = useState({ feelings: [] });
 

  useEffect(() => {
    fetchFeelings()
  }, []);

  function fetchFeelings() {
    return fetch('http://localhost:3000/feelings')
      .then(res => res.json())
      .then(data => setFeelingData(data)
      )
  }

  function handleUpdateFeeling(updatedFeeling) {
    const updatedFeelings = feelingData.map((feeling) => feeling.id === updatedFeeling.id ? updatedFeeling : feeling);
    setFeelingData(updatedFeelings);
  }
 
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
           <About/>
        </Route>
        <Route exact path="/Feelings">
            <FeelingsContainer feelings={feelingData} handleUpdateFeeling={handleUpdateFeeling} />
        </Route>
        <Route exact path="/Share">
           <Form setFeelingData={setFeelingData}/>
        </Route>
      </Switch>
      
    </div>
  );
}
export default App;
