import React from 'react';

const DeviceTable = (props) => {
  return(
    <table className="striped">
      <thead>
        <tr>
            <th>Serial #</th>
            <th>Part #</th>
            <th>Location</th>
            <th>Lot #</th>
        </tr>
      </thead>
      <tbody>
      {
        props.devices.map( x => {
          return(
            <tr>
              <td>{x.serial_number}</td>
              <td>{x.part_number}</td>
              <td>{x.location}</td>
              <td>{x.lot_number}</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}

export default DeviceTable;
