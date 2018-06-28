import React from 'react';

const DeviceCard = (props) => {
  return(
    <div class="card-panel grey lighten-5 z-depth-1">
      <div class="row valign-wrapper">
        <div class="col s4">
          <img src={props.img} alt="" class="circle responsive-img">
        </div>
        <div class="col s8">
          <span class="black-text">
            This is a square image. Add the "circle" class to it to make it appear circular.
          </span>
        </div>
      </div>
    </div>
  );
}

export default DeviceCard;
