import React, { Component } from 'react';
import LeftScrollBar from '../../components/Page2/leftscrollbar';
import RightScrollBar from '../../components/Page2/rightscrollbar';
import DeviceTable from '../../components/Page2/device_table';
import logo from '../../images/bcflogo.png'



class Page2 extends Component {
  constructor() {
    super();
    this.state = {
      companies: [
        {
          instrument_name: "Roche Cobas 8000",
          company: "Roche",
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjC1ZHLkSu1zq01mPvwbssbDYx7Q-bOAU-bLiMrnHOxNYJ5BJ4g",
          instrument_id: 1
        },
        {
          instrument_name: "Abbott Alinity-h",
          company: "Abbott",
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP10WlSdJLQy-mFpFpM_QSmx4E6Qg3WErm-djtUQg9PlYEQaRU",
          instrument_id: 2
        },
        {
          instrument_name: "Beckman Coulter UniCel Dxl-800",
          company: "Beckman Coulter",
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_WqKHSLE0w7g0eCjNacbl2o59ZDn2wm0QfJiPzp3AQwawmpaDjQ",
          instrument_id: 3
        },
        {
          instrument_name: "Atellica",
          company: "Siemens",
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9UmlB_xySmmOUspRwo5oRdsZ6y2PCwxJKxxFGXugQqv45YL8lg",
          instrument_id: 4
        },
        {
          instrument_name: "BD FACSCelesta",
          company: "Becton Dickinson",
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSARJ_7odOGCdQJw1Gwq7wAWbaAk_c7OpBA9FinaZuZ0pzlumoh",
          instrument_id: 5
        }
      ],
      devices: [
        {
          serial_number: 427,
          part_number: "0EFxyz",
          location: "Labcorp",
          lot_number: "12345",
        },
        {
          serial_number: 428,
          part_number: "0EFxyz",
          location: "Quest",
          lot_number: "12345",
        },
        {
          serial_number: 429,
          part_number: "0EFxyz",
          location: "PUH",
          lot_number: "12345",
        },
        {
          serial_number: 430,
          part_number: "0EFxyz",
          location: "Labcorp",
          lot_number: "12345",
        },
        {
          serial_number: 431,
          part_number: "0EFxyz",
          location: "NYU",
          lot_number: "12345",
        },
        {
          serial_number: 432,
          part_number: "0EFxyz",
          location: "RWJ",
          lot_number: "12345",
        },
        {
          serial_number: 427,
          part_number: "0EFxyz",
          location: "Labcorp",
          lot_number: "12345",
        }
      ],
      components: [{asdf: 'asdf'}],
      selectedInstrument: {
        instrument_name: "Abbott Alinity-h",
        company: "Abbott",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP10WlSdJLQy-mFpFpM_QSmx4E6Qg3WErm-djtUQg9PlYEQaRU",
        instrument_id: 2
      }
    }
    this.onInstrumentSelect = this.onInstrumentSelect.bind(this);
  }

  onInstrumentSelect = (instrument_id) => {
    let newInstrumentList = this.state.companies.filter( x => x.instrument_id === instrument_id)
    let newInstrument = newInstrumentList[0]
    this.setState({ selectedInstrument: newInstrument })
    //event.preventDefault()
  }



  render() {
    var tableStyles = {
      tableContainer: { height: '500px' },
      table: { display: "flex", flexFlow: "column", height: "100%", width: "100%"}
    }

    //var theadStyle = {
    //  flex: '0 0 auto',
    //  width: 'calc(100% - 0.9em)',
    //  display: 'table',
    //  tableLayout: 'fixed'
    //}

    //var trStyle = {
    //  width: '100%',
    //  display: 'table',
    //  tableLayout: 'fixed'
    //}

    //var tbodyStyle = {
    //  flex: '1 1 auto',
    //  display: 'block',
    //  overflowY: 'scroll'
    //}

    var imageStyle = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'
    }

    return(
      <div className="row">
        <div className="col s12 m4 l3">
          <img className="responsive-img" src={logo} alt="some stuff"/>
          <LeftScrollBar companies={this.state.companies} changeSelectedInstrument={this.onInstrumentSelect}/>
        </div>
        <div className="col s12 m8 l6">
          <div className="instrument-info">
            <h1 style={{ textAlign: 'center' }}>{this.state.selectedInstrument.instrument_name}</h1>
            <img style={imageStyle} src={this.state.selectedInstrument.image_url} alt="" className="responsive-img z-depth-3" />
            <h2 style={{ textAlign: 'center' }}>Devices</h2>
            <div style={tableStyles.tableContainer} className="table-container">
            {
              <DeviceTable devices={this.state.devices} />
            }
            </div>
          </div>
        </div>
        <div className="col s12 m8 l3">
          <div className="components-scrollable">
            <RightScrollBar components={this.state.components} />
          </div>
        </div>
      </div>
    )
  }
}

export default Page2;
