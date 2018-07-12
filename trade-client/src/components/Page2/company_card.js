import React from 'react';

const CompanyCard = (props) => {
  return(
    <div key={props.props.instrument_id} className="card-panel grey lighten-5 z-depth-1" onClick={(e) => props.changeState(props.props.instrument_id)}>
      <div className="row valign-wrapper">
        <div className="col s4">
          <img src={props.props.image_url} alt="" className="responsive-img"/>
        </div>
        <div className="col s8">
          <span className="black-text">
            {props.props.instrument_name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
