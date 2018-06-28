import React, { Component } from 'react';
import LeftScrollBar from '../../components/Page3/leftscrollbar';
import RightScrollBar from '../../components/Page3/leftscrollbar';
import DeviceTable from '../../components/Page3/device_info_table';
import logo from '../../images/bcflogo.png';
import peripump from '../../images/peripump.jpg'



class Page3 extends Component {
  constructor() {
    super();
    this.state = {
      devices: [],
      data: []
    }
  }

  render() {
    var tableStyles = {
      tableContainer: { height: '450px', marginTop: '40px' },
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

    var componentInfo = {
      textAlign: 'center',
      alignContent: 'center'
    }

    return(
      <div className="row">
        <div className="col s12 m4 l3">
          <img className="responsive-img" src={logo} />
          <div className="scrollable">
            <div style={componentInfo} className="component-info">
            <h3 style={{textAlign: 'center' }}>Instrument Name</h3>
            <img style={imageStyle} src={peripump} alt="" className="responsive-img z-depth-3" />
            <div style={tableStyles} className="table-container">
            {
              <DeviceTable devices={this.state.devices} />
            }
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Page3;
