import React from 'react';

const DeviceTable = (props) => {
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
    display: 'table',
    overflowY: 'scroll'
  }

  return(
    <table className="striped">
      <thead style={theadStyle}>
        <tr>
            <th>Information</th>
            <th>Value</th>
        </tr>
      </thead>
      <tbody style={tbodyStyle} >
      {
        props.devices.map( x => {
          <tr>
            <td>x.key</td>
            <td>x.value</td>
          </tr>
        })
      }
      </tbody>
    </table>
  )
}

export default DeviceTable;
