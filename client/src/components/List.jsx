import React from 'react';
import ListItem from './ListItem';

let List = ({displayedResults}) => {
  return (
    displayedResults.map(result => (
      <ListItem result={result} key={result.id} />
    ))
  )
}

export default List;