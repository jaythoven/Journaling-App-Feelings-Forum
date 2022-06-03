import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const initialForm = {
    name: "",
    content: "",
    likes: 0,
    date: `${new Date().toLocaleDateString()}`,
}

function Form({ setFeelingData }) {
    const [form, setForm] = useState(initialForm);
    // const [hidden, setHidden] = useState(true);

    function handleChange(e) {
        setForm((currentFormState) => ({ ...currentFormState, [e.target.name]: e.target.value }));
        // setHidden(!hidden);
    }

    // const handleTextChange = (event) => {
    //     setForm(event.target.value);
    //   };
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        if(e.target.name.value === "" && e.target.content.value !== ""){return alert("PLEASE ADD A NAME")}
        else{if(e.target.content.value === "" && e.target.name.value !== ""){return alert("PLEASE ADD A FEELING")}
        else{ if(e.target.name.value === "" && e.target.content.value === ""){
            return alert("PLEASE ADD A NAME AND A FEELING")
        }else{
    fetch("http://localhost:3000/feelings", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(form),
    })
    .then(r => r.json())
    .then(newContentData => setFeelingData((currentContent) => [...currentContent, newContentData]))

    setForm(initialForm);
    history.push('/Feelings')
  }}}}

    return (
        <div>  <h1 className="about__header">Tell us how you are feeling</h1>
            <form id="Share" className="form card" onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
                <textarea name="content" placeholder="Write your comment here..." rows={10} value={form.content} onChange={handleChange} />
                <input id="submit" className="button" type="submit" value="Share your feelings with the world..." />
            </form>
        </div>
    )
}



export default Form;