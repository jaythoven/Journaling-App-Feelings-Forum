import React, { useState, useEffect } from "react";

function FeelingCard({ feeling }) {

    //set like state
    const [likeValue, setLikeValue] = useState(feeling.likes);

    //update like state on click
    function likeHandler(e) {
        setLikeValue(likeValue + 1);
    }

    return (
        <div className="card">
            <h3 className="card__name">{feeling.name}</h3>
            <p className="card__content">{feeling.content}</p>
            <p className="card__extras">
                <button onClick={likeHandler} className="card__likes">Likes: {likeValue} </button>
                <span className="card__date">{feeling.date} </span>
            </p>
        </div>
    );
}

export default FeelingCard;
