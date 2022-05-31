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
        fetch("http://localhost:8004/poems", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(newForm),
        })
        .then(r => r.json())
        .then(newPoemData => setPoems((currentPoems) => [...currentPoems, newPoemData]))
    
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