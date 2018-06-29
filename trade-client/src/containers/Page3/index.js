import React, { Component } from 'react';
import LeftScrollBar from '../../components/Page3/leftscrollbar';
import RightScrollBar from '../../components/Page3/leftscrollbar';
import DeviceInfoTable from '../../components/Page3/device_info_table';
import DeviceTable from '../../components/Page3/device_table';
import logo from '../../images/bcflogo.png';
import peripump from '../../images/peripump.jpg';
import { LineChart,
         CartesianGrid,
         XAxis,
         YAxis,
         Tooltip,
         Legend,
         Line
       } from 'recharts';
import axios from 'axios';

function formatData(data) {
  let level1 = data.filter( x => x.level === 1)
  let level2 = data.filter( x => x.level === 2)
  let level3 = data.filter( x => x.level === 3)
  let collector = []
  let collectorLength = 0
  for (let i = 0; i < level1.length; i++) {
    collector[i] = {}
    collector[i]["sample_num"] = i
    collector[i]["level 1"] = level1[i]['value']
  }
  collectorLength = collector.length
  for (let i = 0; i < level2.length; i++) {
    if (i < collectorLength) {
      collector[i]["sample_num"] = i
      collector[i]["level 2"] = level2[i]['value']
    }
    else {
      collector[i] = {}
      collector[i]["sample_num"] = i
      collector[i]["level 2"] = level2[i]['value']
    }
  }
  collectorLength = collector.length
  for (let i = 0; i < level3.length; i++) {
    if (i < collectorLength) {
      collector[i]["sample_num"] = i
      collector[i]["level 3"] = level3[i]['value']
    }
    else {
      collector[i] = {}
      collector[i]["sample_num"] = i
      collector[i]["level 3"] = level3[i]['value']
    }
  }

  return collector
}

class Page3 extends Component {
  constructor() {
    super();
    this.state = {
      devices: [],
      data: [],
      device: [],
      intervalId: 0,
      currentCount: 0,
      percentage: "100px",
      percent: "75%"
    }

    this.timer = this.timer.bind(this)
  }



  fetchDataFromServer() {
    axios.get("http://localhost:8081/pump/1")
    .then( x => formatData(x.data))
      .then( y => {
        let Percent = Math.random() * 30 + 70
        let cssPercent = (100 - Percent)/100 * 400
        cssPercent = cssPercent.toString() + "px"
        this.setState({
          data: y,
          percentage: cssPercent,
          percent: parseInt(Percent)
        })
      })
  }

  componentDidMount() {
    var intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId});
    this.setState({currentCount: 5 });
    this.fetchDataFromServer();
  }

  componentWillUnmount() {
     clearInterval(this.state.intervalId);
  }

  timer() {
    var newCount = this.state.currentCount - 1;
    if(newCount >= 0) {
        this.setState({ currentCount: newCount });
    } else {
        this.setState({currentCount: 5 });
        this.fetchDataFromServer();
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

    var componentData = {
      alignContent: "center",
      width: "90%",
      marginTop: "20px",
      marginBottom: "20px",
      height: "50px",
      fontWeight: "bold",
      backgroundColor: "#14B5eb"
    }

    var graphArea = {
      height: "300px"
    }

    var progressBarParent = {
      backgroundColor: "#14B5eb",
      height: "400px",
      width: "300px",
      margin: "auto"
    }

    var progressBarChild = {
      backgroundColor: "#bbdefb",
      height: this.state.percentage,
      width: "300px",
      margin: "auto"
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
              <DeviceInfoTable devices={this.state.device} />
            }
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m8 l6">
        <div style={componentInfo} className="component-info">
          <h1>Component Data</h1>
          <div style={graphArea} className="graph-area">
            <LineChart width={800} height={300} data={ this.state.data }
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="sample_num" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="level 1" stroke="#8884d8" />
              <Line type="monotone" dataKey="level 2" stroke="#82ca9d" />
              <Line type="monotone" dataKey="level 3" stroke="#8884d8" />
            </LineChart>
          </div>
          <div className="devices">
            <h2>Devices</h2>
            <div className="table-container-devices">
              <DeviceTable devices={this.state.devices} />
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m8 l3">
        <div className="component-data">
          <a style={componentData} className="waves-effect waves-light btn">Live</a>
          <a style={componentData} className="waves-effect waves-light btn">24 Hour</a>
          <a style={componentData} className="waves-effect waves-light btn">30 Day</a>
          <a style={componentData} className="waves-effect waves-light btn">1 Year</a>
          <a style={componentData} className="waves-effect waves-light btn">Max</a>
        </div>
        <div className="progress-bar">
          <div className='row'>
            <h3 style={{textAlign: "center"}}>Life: {this.state.percent}</h3>
          </div>
          <div style={progressBarParent} className='progress-bar-parent'>
            <div style={progressBarChild} className='progress-bar-child'>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Page3;
