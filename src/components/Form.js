import React, { useState } from "react";

const initialForm = {
    name: "",
    content: "",
    likes: 0,
}

function Form({setFeelingData}) {
    const [form, setForm] = useState(initialForm);

    function handleChange(e) {
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
    
        setForm(form);
      }
    
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange}/>
            <textarea name="content" placeholder="Write your comment here..." rows={10} value={form.content} onChange={handleChange}/>
            {/* <input name="likes" placeholder="Likes" value={form.likes} onChange={handleChange}/> */}
            <input type="submit" value="Share your feelings with the world..." />
        </form>
    )
}

export default Form;