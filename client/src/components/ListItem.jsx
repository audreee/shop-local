import React from 'react';

let ListItem = ({ result }) => {
  return (
    <div className="flex-column">
      <h3 className="name">{result.name}</h3>
      <h5 className="neighborhood">{result.neighborhood}</h5>
      { result.phone && <h5 className="phone">{result.phone}</h5> }
      { result.website && <h5 className="website">{result.website}</h5> }
      <span className="flex-row">
        <p>{result.address_line_1},</p>
        { result.address_line_2 && <p>{result.address_line_2},</p> }
        <p>{result.city}</p>
        <p>{result.state}</p>
        <p>{result.zip}</p>
      </span>
    </div>
  )
}

export default ListItem;