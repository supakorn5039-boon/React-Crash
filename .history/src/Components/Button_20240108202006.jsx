import React from "react";
import PropTypes from 'prop-types'

export default function Button({ name }) {
  return <button>{name}</button>;
}


Button.PropTypes = [
  name : PropTypes.string.isRequired
];