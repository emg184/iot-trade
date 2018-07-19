/*global google*/
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import icon from '../../images/test_tube.png';
//import logo from '../../images/test_tube.png'

const LocationMap = withScriptjs(withGoogleMap((props) => {
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
              url: icon,
              scaledSize: new google.maps.Size(31, 43)
            }}
            onClick={() => props.redirectFunction(x)}
          >
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



export default LocationMap;
