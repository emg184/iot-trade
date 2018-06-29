import React from 'react';

const CompanyCard = (props) => {
  return(
    <div className="card-panel grey lighten-5 z-depth-1">
      <div className="row valign-wrapper">
        <div className="col s4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQii59OeQrAjysxDa9imUrRIuGoDm2iz0BkawTOje1NLHfNAKjb" alt="" className="circle responsive-img"/>
        </div>
        <div className="col s8">
          <span className="black-text">
            Siemens Atellica The Cutting Edge of IVD
          </span>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
