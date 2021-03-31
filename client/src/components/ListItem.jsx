import React from 'react';

let ListItem = ({ result }) => {
  return (
    <div className="list-entry">
      <h3 className="name flex-row">{result.name}</h3>
      <h5 className="orange flex-row">{result.neighborhood}</h5>
      { result.phone && <h5 className="smaller flex-row">{result.phone}</h5> }
      { result.website === "null" ? null : <h5 className="smaller flex-row">{result.website}</h5> }
      <div className="flex-row address gray">
        <h6 className="pad-right flex-row">{result.address_line_1},</h6>
        { result.address_line_2 === "null" ? null : <h6 className="pad-right flex-row">{result.address_line_2},</h6> }
        <h6 className="pad-right flex-row">{result.city}, {result.state}, {result.zip}</h6>
      </div>
    </div>
  )
}

export default ListItem;