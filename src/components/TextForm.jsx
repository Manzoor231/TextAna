import React, { useState, useRef } from "react";

function TextForm() {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
  };
  const onClearClick = () => {
    setText("");
  };
  const textRef = useRef(null);
  const onCopyClick = () => {
    textRef.current?.select();
    window.navigator.clipboard.writeText(text);
  };
  return (
    <div className="container my-4">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h2>Enter Your Text to Anaylize Your Words</h2>
        </label>
        <textarea
          value={text}
          onChange={onChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          ref={textRef}
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        onClick={handleUpClick}
        type="button"
        className="btn btn-primary mx-1"
      >
        Uppercase
      </button>
      <button
        disabled={text.length === 0}
        onClick={handleLoClick}
        type="button"
        className="btn btn-secondary mx-2"
      >
        LowerCase
      </button>
      <button
        disabled={text.length === 0}
        onClick={onClearClick}
        type="button"
        className="btn btn-primary"
      >
        Clear
      </button>
      <button type="button" className="btn btn-primary" onClick={onCopyClick}>
        Copy
      </button>
      <h2 className="my-3">Your Text Summary</h2>
      <p>
        {
          text.split(/\+S/).filter((element) => {
            return element.length !== 0;
          }).length
        }{" "}
        Words {text.length} Characters
      </p>
      <p>
        {0.008 *
          text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length}{" "}
        minutes to read
      </p>
      <h2>Preview</h2>
      <p>
        {text ? (
          text === "" ? (
            <span>write something</span>
          ) : (
            text
          )
        ) : (
          <span>write something</span>
        )}
      </p>
    </div>
  );
}

export default TextForm;
