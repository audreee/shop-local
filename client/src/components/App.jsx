import React from 'react';
import Search from './Search.jsx';
import List from './List.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      displayedResults: [],
    }
    this.searchBusinesses = this.searchBusinesses.bind(this);
    this.showResults = this.showResults.bind(this);
    this.showMoreOnScroll = this.showMoreOnScroll.bind(this);
  }

  searchBusinesses(searchTerms) {
    // send search terms to server
    // receive response and update results
    // push the first 4 results to displayed results
  }

  showResults() {
    let currentLength = this.state.displayedResults.length;
    if (currentLength === this.state.results.length) {
      window.removeEventListener('scroll', this.showMoreOnScroll, false);
    } else if (currentLength < 4) {
      let businesses = [];
      for (let i = 0; i < 4; i++) {
        if (this.state.results[i]) {
          businesses.push(this.state.results[i])
        }
      }
      this.setState({
        displayedResults: [...businesses]
      })
    } else {
      let nextResults = [];
      for (let i = currentLength; i < currentLength + 2; i++) {
        if (this.state.results[i]) {
          nextResults.push(this.state.results[i])
        }
      }
      this.setState({
        displayedResults: [...this.state.displayedResults, ...nextResults]
      })
    }
  }

  showMoreOnScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.showResults();
    }
  }


  componentDidMount() {
    axios.get('/all')
    .then((res) => {
      this.setState({ results: res.data }, this.showResults);
      window.addEventListener('scroll', this.showMoreOnScroll);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    return(
      <div className="app-container">
        <h2 className="title">Localize LA</h2>
        <Search searchBusinesses={this.searchBusinesses} />
        <List displayedResults={this.state.displayedResults} />
      </div>
    )
  }
}

export default App;

