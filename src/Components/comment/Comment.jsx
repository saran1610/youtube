import { BiLike, BiDislike } from "react-icons/bi";
import React from "react";

function Comment({ name, uploaded, image, comment }) {
  return (
    <div>
      <img src={image} alt="profile" />
      <div className="d-flex">
        <p>{name}</p>
        <p>{new Date(uploaded.toDate()).toString().slice(0, 25)}</p>
      </div>
      <p>{comment}</p>
    </div>
  );
}

export default Comment;
