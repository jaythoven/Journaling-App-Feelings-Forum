import React, { useState } from "react";

const initialForm = {
    name: "",
    content: "",
    likes: 0,
    date: `${new Date().toLocaleDateString()}`,
}

function Form({setFeelingData}) {
    const [form, setForm] = useState(initialForm);
    const [isHidden, setIsHidden] = useState(true);
    
    const buttonText = "Share your feelings with the world..."

    // function handleFormChange(e) {
    //     if(e.target.value.length > 0) {
    //         setIsHidden(!isHidden)
    //     } else {
    //         setIsHidden(isHidden)
    //     }
    // }

    function handleChange(e) {
        if(e.target.value.length > 0) {
            setIsHidden(!isHidden)
        } else {
            setIsHidden(isHidden)
        };
        // console.log(e.target);
        setForm((currentFormState) => ({...currentFormState, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:3000/feelings", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(form),
        })
        .then(r => r.json())
        .then(newContentData => setFeelingData((currentContent) => [...currentContent, newContentData]))
        // must create a state in app or wherever contents/comments from db.json will be rendered
    
        // setForm(form);
        setForm(initialForm);
      }
    
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" type="text" value={form.name} onChange={handleChange}/>
            <textarea name="content" placeholder="Write your comment here..." type="text" rows={5} value={form.content} onChange={handleChange}/>
            {/* <input name="likes" placeholder="Likes" value={form.likes} onChange={handleChange}/> */}
            <button type="submit" disabled={isHidden}>{buttonText}</button>
        </form>
    )
}

export default Form;