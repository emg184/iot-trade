import React from 'react';

const ComponentCard = (props) => {
  return(
    <div className="card-panel grey lighten-5 z-depth-1">
      <div className="row valign-wrapper">
        <div className="col s4">
          <img src="images/peripump.jpg" alt="" className="responsive-img">
        </div>
      <div className="col s8">
        <span className="black-text">
          This is a square image. Add the "circle" class to it to make it appear circular.
        </span>
      </div>
    </div>
  </div>
  );
}

export default ComponentCard;
