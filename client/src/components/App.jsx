import React from 'react';
import Search from './Search.jsx';
import List from './List.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      displayedResults: []
    }
    this.searchBusinesses = this.searchBusinesses.bind(this);
  }

  searchBusinesses(searchTerms) {
    // send search terms to server
    // receive response and update results
    // push the first 4 results to displayed results
  }

  render() {
    return(
      <div className="app-container">
        <Search searchBusinesses={this.searchBusinesses} />
        <List displayedResults={this.state.displayedResults} />
      </div>
    )
  }
}

export default App;

