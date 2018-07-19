import React, { Component } from 'react';

import * as api from '../../api/Addlocation/index';
import config from '../../config.js';

import GeoCodeInfo from '../../components/AddLocation/GeoCodeInfo';
import LocationMap from '../../components/AddLocation/LocationMap';

class AddLocation extends Component {
  constructor(props){
    super(props);
    this.state = {
      properties: [],
      line1: "",
      line2: "",
      city: "",
      state: "",
      correctProperty: "",
      googleData: "",
      modalState: 'propertydetails',
      files: ''
    }

    this.onLine1Change = this.onLine1Change.bind(this);
    this.onLine2Change = this.onLine2Change.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.correctProperty = this.correctProperty.bind(this);
    //this.onDescriptionChange = this.onDescriptionChange.bind(this);
    //this.onBedChange = this.onBedChange.bind(this);
    //this.onBathsChange = this.onBathsChange.bind(this);
    //this.onParkingChange = this.onParkingChange.bind(this);
    //this.onPriceChange = this.onPriceChange.bind(this);
    //this.onHometypeChange = this.onHometypeChange.bind(this);
    this.renderModalCase = this.renderModalCase.bind(this);
    this.geoCode = this.geoCode.bind(this);
    //this.onAcceptDetails = this.onAcceptDetails.bind(this);
    //this.onDrop = this.onDrop.bind(this)
    //this.uploadMain = this.uploadMain.bind(this);
  }

  geoCode(event) {
    let line1 = this.state.line1.split(' ').join('+');
    let city = this.state.city.split(' ').join('+');
    let state = this.state.state.split(' ').join('+');
    let address = line1 + ",+" + city + ",+" + state
    let base = "https://maps.googleapis.com/maps/api/geocode/json?address="
    let getLink = base + address + `&key=${config.mapsKey}`
    api.getCoordinates(getLink)
      .then(res => {
        res.data.results[0].geometry.location.property_id = 1
        let locationData = {}
        locationData['location'] =  res.data.results[0].geometry.location
        this.setState({
           properties: [locationData],
           googleData: res,
           modalState: 'mapview'
        })
      })
    event.preventDefault()
  }

  onLine1Change(event) {
    this.setState({ line1: event.target.value })
    event.preventDefault()
  }

  onLine2Change(event) {
    this.setState({ line2: event.target.value })
    event.preventDefault()
  }

  onCityChange(event) {
    this.setState({ city: event.target.value })
    event.preventDefault()
  }

  onStateChange(event) {
    this.setState({ state: event.target.value })
    event.preventDefault()
  }

  correctProperty(event) {
    this.setState({ correctProperty: true })
  }

  renderModalCase() {
    switch(this.state.modalState) {
      case 'propertydetails':
          return(
            <GeoCodeInfo
              funcs = {{
                line1: this.onLine1Change,
                line2: this.onLine2Change,
                city: this.onCityChange,
                state: this.onStateChange,
                accept: this.onAcceptDetails,
                geoCode: this.geoCode
              }}
            />
          );
      case 'mapview':
        var mapUrl = `https://maps.googleapis.com/maps/api/js?key=${config.mapsKey}`;
        return(
          <div style={{ height:'50vh', width:'50vw', top: '0', bottom: '0' }}>
            <LocationMap
              isMarkerShown
              googleMapURL={mapUrl}
              loadingElement={<div style={{ height: `100%`, width: '100%' }} />}
              containerElement={<div style={{ height: `100%`, width: '100%' }} />}
              mapElement={<div style={{ height: `100%`, width: '100%' }} />}
              properties={this.state.properties}
              funcs = {{
                correctProperty: this.correctProperty,
                incorrectProperty: this.incorrectProperty
              }}
            />
          </div>
        )
    /*  case 'mainimage':
          return(
            <MainImage
              funcs = {{
                dropper: this.onDrop,*/
      //          uploadMainImage: this.uploadMain
      //        }}
      //      />
      //    )
      //case 'extraimages':
        //return(
          //<ExtraImages
          //  funcs = {{
          //    dropper: this.onDrop
          //  }}
          ///>
        //)
      default:
          return null;
    }
  }


  render() {
    return(
        <div className="location-form" style={{ textAlign: 'center', contentAlign: 'center' }}>
        {
          this.renderModalCase()
        }
        </div>
    )
  }
}

export default AddLocation;
