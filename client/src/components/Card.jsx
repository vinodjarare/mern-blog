import React from "react";
import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  return (
    <Link to={`/${blog?._id}`}>
      <div className="card">
        <h2>{blog?.title}</h2>
        <p>{blog?.summary?.slice(0, 190)}</p>
      </div>
    </Link>
  );
};

export default Card;
