import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Input({ addpost }) {
  const [input, setInput] = useState("");


  function onKeyDown(event){
    const title = event.target.value;
    
  }
  function onChange(event) {
    setInput(event.target.value);
  }

  return (
    <div className="Input">
      <div className="Input_header">Create Post</div>
      <input
        className="Input_field"
        type="text"
        value={input}
        onChange={onChange}
      />
    </div>
  );
}

Input.propTypes = {
  addpost: PropTypes.func.isRequired,
};
