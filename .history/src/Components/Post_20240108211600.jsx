import React from "react";
import PropTypes from "prop-types";
export default function Post({ id, title }) {
    return ( 
        <div></div>
    )
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
