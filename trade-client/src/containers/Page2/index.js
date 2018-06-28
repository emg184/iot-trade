import React, { Component } from 'react';
import LeftScrollBar from '../../components/Page2/leftscrollbar';
import RightScrollBar from '../../components/Page2/leftscrollbar';
import DeviceTable from '../../components/Page2/device_table';
import logo from '../../images/bcflogo.png'



class Page2 extends Component {
  constructor() {
    super();
    this.state = {
      companies: [],
      devices: [],
      components: []
    }
  }

  render() {
    var tableStyles = {
      tableContainer: { height: '500px' },
      table: { display: "flex", flexFlow: "column", height: "100%", width: "100%"}
    }

    var theadStyle = {
      flex: '0 0 auto',
      width: 'calc(100% - 0.9em)',
      display: 'table',
      tableLayout: 'fixed'
    }

    var trStyle = {
      width: '100%',
      display: 'table',
      tableLayout: 'fixed'
    }

    var tbodyStyle = {
      flex: '1 1 auto',
      display: 'block',
      overflowY: 'scroll'
    }

    var imageStyle = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'
    }

    return(
      <div className="row">
        <div className="col s12 m4 l3">
          <img className="responsive-img" src={logo} />
          <LeftScrollBar companies={this.state.companies} />
        </div>
        <div className="col s12 m8 l6">
          <div className="instrument-info">
            <h1 style={{ textAlign: 'center' }}>Instrument Name</h1>
            <img style={imageStyle} src="images/peripump.jpg" alt="" className="responsive-img" />
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
