import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="frame">
    <div className="card" onClick={props.imageClick}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>

      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
    </div>
  </div>
);

export default ImageCard;
