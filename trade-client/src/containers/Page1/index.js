import React, { Component } from 'react';
import LeftScrollBar from '../../components/Page1/leftscrollbar';
import GoogleMap from '../../components/Page1/googleMap';
import logo from '../../images/bcflogo.png'
import { Link } from 'react-router-dom';
import config from '../../config.js';



class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      components: [{asdf: 'asdf'}],
      sites: [
        { location: { lat: 41.871390, lng: -87.631996 }, property_id: 1, site_name: 'Chicago, IL', infoStatus: false, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vuhMEavObDeAhVh2zwJpSMXRTV2hn1nGZqYK395WRgip1s78zQ"},
        { location: { lat: 42.331336, lng: -71.073969 }, property_id: 2, site_name: 'Boston, MA', infoStatus: false, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyH3I87pg9V0b2lP5JV_-guJHofCes6iUQTL7ivr3uV_YrK8v"},
        { location: { lat: 40.853648, lng: -74.051390 }, property_id: 3, site_name: 'Teterboro, NJ', infoStatus: false, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExns01cL4SO095lJz8ByKJAaLN82JrDiE3wyO_pjTHI3N69bQIA"},
        { location: { lat: 26.932374, lng: -80.070273 }, property_id: 4, site_name: 'Jupiter, FL', infoStatus: false, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhpucRiCmo5aq6wjMuXHaHDSZkC0Nw4EayacGY_x4BeuPUpIiug"},
        { location: { lat: 37.762325, lng: -122.446827 }, property_id: 5, site_name: 'San Francisco, CA', infoStatus: false, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSUIxtTL0CYSPWOhedT4lh2GRPOL4x3T3rziNl2o7KkZgSnfuww"}
      ],
      viewState: 'map'
    }

    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(x) {
    console.log('here')
    console.log(x)
    let z = this.state.sites.filter( y => y.property_id !== x.property_id)
    if (x.infoStatus === true) {
      x.infoStatus = false
    }
    else {
      x.infoStatus = true
    }
    let newState = [...z, x]
    this.setState({ sites: newState })
  }

  render() {
    //var imageStyle = {
    //  display: 'block',
    //  marginLeft: 'auto',
    //  marginRight: 'auto'
    //}

    return(
      <div className="row">
        <div className="col s12 m4 l3">
          <img className="responsive-img" src={logo} alt="some stuff"/>
          <LeftScrollBar companies={this.state.sites} />
        </div>
        <div className="col s12 m8 l9">
          { this.state.viewState === 'map'
            ?
              mapArea(this.state.sites, this.onMarkerClick)
            :
              cardView(this.state.properties)
          }
        </div>
      </div>
    )
  }
}



const mapArea = (props, toggleFunc) => {
  var mapUrl = `https://maps.googleapis.com/maps/api/js?key=${config.mapsKey}`;
  return(
    <div style={{ height:'100vh', top: '0', bottom: '0' }}>
      <GoogleMap
        isMarkerShown
        googleMapURL={mapUrl}
        loadingElement={<div style={{ height: `100%`, width: '100%' }} />}
        containerElement={<div style={{ height: `100%`, width: '100%' }} />}
        mapElement={<div style={{ height: `100%`, width: '100%' }} />}
        properties={props}
        redirectFunction={toggleFunc}
      />
    </div>
  )
}

const cardView = (props) => {
  return(
    props.map( x => {
      return(

        <div key={x.property_id} className="col s10 offset-s1">
          <Link to={`/property/${x.property_id}`}>
            <div className="card">
              <div className="card-image">
                <img className='responsive-img' src={x.image_url} alt="house"/>
              </div>
              <div className="card-content">
                <div className="card-title">
                  {x.address.line1}
                </div>
                <div className='row'>
                  <div className='col-s6'>
                    <div className='card-price'>
                      <p>$ {x.price}</p>
                    </div>
                    <div className='hometype'>
                      <p>{x.hometype}</p>
                    </div>
                  </div>
                  <div className='col-s6'>
                    <div className='card-beds'>
                      <p>{x.beds} Beds</p>
                    </div>
                    <div className='card-baths'>
                      <p>{x.baths} Baths</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
    )
    })
  )
}

export default Page1;
