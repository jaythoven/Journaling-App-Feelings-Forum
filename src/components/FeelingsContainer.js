import React, { useState, useEffect } from "react";
import FeelingCard from "./FeelingCard";

function FeelingsContainer({ feelings, handleUpdateFeeling }) {

  return (
    <div id="container" className="feelings-container">
      {feelings.length === undefined ? <div>Still loading...</div> : feelings.map((feeling) =>
        <FeelingCard key={feeling.id} feeling={feeling} handleUpdateFeeling={handleUpdateFeeling} />
      )}
    </div>
  );
}

export default FeelingsContainer;