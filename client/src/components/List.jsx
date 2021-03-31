import React from 'react';
import ListItem from './ListItem.jsx';

let List = ({displayedResults}) => {
  return (
    <div className="results-list">
    { displayedResults.map(result => (
      <ListItem result={result} key={result.id} />
    )) }
    </div>
  )
}

export default List;