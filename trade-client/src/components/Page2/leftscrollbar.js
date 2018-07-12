import React from 'react';
import CompanyCard from './company_card';

const LeftScrollBar = (props) => {
  var scrollable = {
    height: '850px',
    overflowY: 'auto'
  }
  return(
    <div style={scrollable} className="scrollable">
    {
      props.companies.map( x => {
          return <CompanyCard props={x} changeState={props.changeSelectedInstrument}/>
      })
    }
    </div>
  );
}

export default LeftScrollBar;
