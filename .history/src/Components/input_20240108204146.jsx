import React from "react";
import PropTypes from 'prop-types'



export default function Input({addpost}) {
  return (
    <div className="Input">
      <div className="Input_header">Create Post</div>
      <input className="Input_field" type="text" />
    </div>
  );
}

Input.PpopTypes = {
  addpost: PropTypes.func
}
