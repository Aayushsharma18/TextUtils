import React, { useState } from 'react'


export default function TextForm(props) {
    //Component function goes here:

    const [text, setText] = useState("Write Text here:");
    // setText("This is a sample text.");


    const handleUpClick = () => {
        // console.log("Up Button was clicked" + text);

        let newtext = text.toUpperCase();
        setText(newtext);
    };


    const handleOnchange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    return (
        <div>
            <h1>{props.header}</h1>

            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.label} </label>
                <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="3"></textarea>

            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Upper case</button>
        </div>
    );
}
