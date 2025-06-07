import React,{useState} from 'react';

export default function Form(props) {
    const handleUpperClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        console.log("Changed!");
        setText(event.target.value)
    }
    const[text,setText]=useState('Enter Text here')
  return (
    <>
      <div className="mb-4">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="15"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperClick} >Convert to UpperCase</button>
    </>
  );
}
