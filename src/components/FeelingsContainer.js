import React, { useState, useEffect } from "react";
import FeelingCard from "./FeelingCard";

function FeelingsContainer({ feelings }) {

  console.log('inside container:', feelings);
  console.log(feelings.length);

  return (
    <div id="container" className="feelings-container">
      {feelings.length === undefined ? <div>Still loading...</div> : feelings.map((feeling) =>
        <FeelingCard key={feeling.id} feeling={feeling} />
      )}
    </div>
  );
}

export default FeelingsContainer;