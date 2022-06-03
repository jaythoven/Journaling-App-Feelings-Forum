import React, { useEffect } from "react";
import FeelingCard from "./FeelingCard";

function FeelingsContainer({ feelings, handleUpdateFeeling, messagesEndRef, scrollToBottom }) {
  useEffect(scrollToBottom, [feelings])
  return (

    <div id="container" className="feelings-container">
      <h1 className="about__header">Welcome to the Feelings Forum</h1>
      {feelings.length === undefined ? <div>Still loading...</div> : feelings.map((feeling) =>
        <FeelingCard key={feeling.id} feeling={feeling} handleUpdateFeeling={handleUpdateFeeling} scrollToBottom={scrollToBottom} />
      )}
      <div ref={messagesEndRef} />
    </div>
  );

}


export default FeelingsContainer;