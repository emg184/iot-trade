import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={'/device/1'}>
              <td>{x.serial_number}</td>
            </Link>
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
