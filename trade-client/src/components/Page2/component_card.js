import React from 'react';

const ComponentCard = (props) => {
  return(
    <div className="card-panel grey lighten-5 z-depth-1">
      <div className="row valign-wrapper">
        <div className="col s4">
          <img src="https://i1.wp.com/biochemfluidics.com/wp-content/uploads/2017/06/3products.png?fit=2192%2C3009&ssl=1" alt="" className="responsive-img"/>
        </div>
      <div className="col s8">
        <span className="black-text">
          Maestro Ultra Piston Pump. The Pump that outlasts the Instrument
        </span>
      </div>
    </div>
  </div>
  );
}

export default ComponentCard;
