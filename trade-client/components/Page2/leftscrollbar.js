import React from 'react';
import DeviceCard from './device_card';

const LeftScrollBar = (props) => {
  return(
    <div className="scrollable">
      props.map( x => {
        <DeviceCard props={x} />
    })
    </div>
  );
}

export default LeftScrollBar;
