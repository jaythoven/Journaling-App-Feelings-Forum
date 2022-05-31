import React, { useState, useEffect } from "react";

function FeelingCard({ feeling, handleUpdateFeeling }) {
    const { id, name, content, likes, date} = feeling;

    function likeHandler() {
          fetch(`http://localhost:3000/feelings/${id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({likes: feeling.likes + 1})
            }).then(r=>r.json())
            .then((data) => { console.log(data);
                handleUpdateFeeling(data)})
    }

    return (
        <div className="card">
            <h3 className="card__name">{feeling.name}</h3>
            <p className="card__content">{feeling.content}</p>
            <p className="card__extras">
                <button onClick={likeHandler} className="card__likes">Likes: {likes} </button>
                <span className="card__date">{feeling.date} </span>
            </p>
        </div>
    );
}

export default FeelingCard;
