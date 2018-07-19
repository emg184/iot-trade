import React from 'react';

const GeoCodeInfo = (props) => {
  console.log(props)
  return(
    <div className="col s6 offset-s3">
      <div className="col s6 offset-s3">
        <form onSubmit={props.funcs.geoCode}>
          Address Line 1:<br/>
          <input type="text" name="line1" onChange={props.funcs.line1} /><br/>
          Address Line 2:<br/>
          <input type="text" name="line2" onChange={props.funcs.line2} /><br/><br/>
          City:<br/>
          <input type="text" name="city"  onChange={props.funcs.city} /><br/><br/>
          State:<br/>
          <input type="text" name="State" onChange={props.funcs.state} /><br/><br/>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default GeoCodeInfo;
