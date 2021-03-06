/*global google*/
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
//import houseImage from '../images/house-icon.png';
import logo from '../../images/test_tube.png'

const MyMapComponent = withScriptjs(withGoogleMap((props) => {

  function onDoubleClick(property_id) {
    window.location = `http://localhost:3000/`
  }

  return(
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 40.037269, lng: -97.235163 }}
    >
    { props.isMarkerShown ?
      props.properties.map( x => {
        return(
          <Marker
            key={x.property_id}
            position={x.location}
            icon={{
              url: logo,
              scaledSize: new google.maps.Size(31, 43)
            }}
            onClick={() => props.redirectFunction(x)}
            onDblClick={onDoubleClick.bind(this, x.property_id)}
          >
          { x.infoStatus &&
            <InfoWindow>
              <div>
                <p>{x.site_name}</p>
                <img src={x.image_url} />
              </div>
            </InfoWindow>
          }
          </Marker>
        )
      })
      :
      <Marker position={{ lat: 40.499094, lng: -74.457080 }} />
    }
    </GoogleMap>
  )
}
))



export default MyMapComponent;
