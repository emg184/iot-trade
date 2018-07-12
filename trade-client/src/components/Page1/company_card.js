import React from 'react';
import { Link } from 'react-router-dom';

const CompanyCard = (props) => {
  return(
    <Link to={'/'}>
      <div className="card-panel grey lighten-5 z-depth-1">
        <div className="row valign-wrapper">
          <div className="col s4">
            <img src={props.props.image_url} alt="" className="circle responsive-img"/>
          </div>
          <div className="col s8">
            <span className="black-text">
              {props.props.site_name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CompanyCard;
