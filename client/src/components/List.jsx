import React from 'react';
import ListItem from './ListItem.jsx';

let List = ({displayedResults}) => {
  return (
    displayedResults.map(result => (
      <ListItem result={result} key={result.id} />
    ))
  )
}

export default List;