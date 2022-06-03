import React, { useState, useEffect } from "react";
import FeelingCard from "./FeelingCard";

function FeelingsContainer({ feelings, handleUpdateFeeling, messagesEndRef }) {
  return (

    <div id="container" className="feelings-container">
      <h1 className="about__header">Welcome to the Feelings Forum</h1>
      {feelings.length === undefined ? <div>Still loading...</div> : feelings.map((feeling) =>
        <FeelingCard key={feeling.id} feeling={feeling} handleUpdateFeeling={handleUpdateFeeling} />
      )}
      <div ref={messagesEndRef} />
    </div>
  );

}


export default FeelingsContainer;