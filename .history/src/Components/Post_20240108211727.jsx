import React from "react";
import PropTypes from "prop-types";
export default function Post({ id, title }) {
  return (
    <div className="Post">
      <div className="Post_title">{title}</div>
      <img className="Post_img" src={`https://source.unsplash.com/random?sig=${id}`}/>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
