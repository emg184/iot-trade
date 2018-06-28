import React from 'react';
import ComponentCard from './component_card';

const RightScrollBar = (props) => {
  var scrollable = {
    height: '850px',
    overflowY: 'auto'
  }

  return(
    <div style={scrollable} className="scrollable">
    {
      props.components.map( x => {
          return <ComponentCard props={x} />
      })
    }
    </div>
  );
}

export default RightScrollBar;
