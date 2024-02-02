import React, { useState } from 'react'


export default function TextForm(props) {
    //Component function goes here:

    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    };

    const handleDownClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    };

    const handleOnchange = (event) => {
        setText(event.target.value);
    };

    const [myStyle, setMyStyle] = useState({
        FontFace: { family: "Times New Roman" }
    });

    const handleFontFamily = () => {

    };

    return (
        <div className="container">
            <h1>{props.header}</h1>

            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.label} </label>
                <textarea className="form-control" placeholder={props.placeholder} value={text}
                    onChange={handleOnchange} id="myBox" rows="3"></textarea>

            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Upper case</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Lower case</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Lower case</button>

            <div className="container my-4">
                <h4>Text Summary:</h4>
                <p> <strong>{text}</strong> contains: {text.split(" ").length} words and {text.length} characters</p>

                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </div>
    );
}
