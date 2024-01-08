import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Input({ addpost }) {
  const [input, setInput] = useState("");
  return (
    <div className="Input">
      <div className="Input_header">Create Post</div>
      <input className="Input_field" type="text" />
    </div>
  );
}

Input.propTypes = {
  addpost: PropTypes.func.isRequired,
};
