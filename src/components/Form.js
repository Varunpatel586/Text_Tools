import React, { useState } from "react";

export default function Form(props) {
  const handleClearClick = () => {
    setText(" ");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("Changed!");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text here");
  return (
    <>
      <div className="mb-4">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="15"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleUpperClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear Text
      </button>
    </>
  );
}
