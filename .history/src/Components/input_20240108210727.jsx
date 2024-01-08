import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Input({ addpost }) {
  const [input, setInput] = useState(["")];

  function onChange(event) {
    setInput(event.target.value);
  }
  function onKeyDown(event) {
    const title = event.target.value;

    if (event.key === "Enter" && title) {
      addpost(title);
      setInput("");
    }
  }

  return (
    <div className="Input">
      <div className="Input_header">Create Post</div>
      <input
        className="Input_field"
        type="text"
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

Input.propTypes = {
  addpost: PropTypes.func.isRequired,
};
