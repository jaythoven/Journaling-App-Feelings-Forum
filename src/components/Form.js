import React, { useState } from "react";

const initialForm = {
    name: "",
    content: "",
    likes: 0,
}

function Form() {
    const [form, setForm] = useState(initialForm);

    function handleChange(e) {
        setForm((currentFormState) => ({...currentFormState, [e.target.name]: e.target.value}));
      }

    function handleSubmit(e) {
        e.preventDefault();
        // enter local host url!
        fetch("ENTER LOCAL HOST URL HERE", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(newForm),
        })
        .then(r => r.json())
        .then(newContentData => setContent((currentContent) => [...currentContent, newContentData]))
        // must create a state in app where contents/comments from db.json are rendered
    
        setForm(newForm);
      }
    
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange}/>
            <textarea name="content" placeholder="Write your comment here..." rows={10} value={form.content} onChange={handleChange}/>
            <input name="likes" placeholder="Likes" value={form.likes} onChange={handleChange}/>
            <input type="submit" value="Share your feelings with the world..." />
        </form>
    )
}

export default Form;