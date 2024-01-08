import React from "react";
import { checkPropTypes } from "prop-types";

export default function Button({ name }) {
  return <button>{name}</button>;
}


Button.propTypes = [
  name:
];