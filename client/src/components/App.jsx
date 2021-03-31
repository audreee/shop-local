import React from 'react';
import axios from 'axios';

import Search from './Search.jsx';
import List from './List.jsx';
import Modal from './Modal.jsx';
import AddNew from './AddNew.jsx';
import Map from './Map.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      displayedResults: [],
      showModal: false
    }
    this.searchBusinesses = this.searchBusinesses.bind(this);
    this.showResults = this.showResults.bind(this);
    this.showMoreOnScroll = this.showMoreOnScroll.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  searchBusinesses(searchTerms) {
    this.setState({ results: [], displayedResults: [] })
    axios.get('/businesses', { params: { terms: searchTerms }})
    .then((res) => {
      console.log(res.data)
      this.setState({ results: res.data }, this.showResults);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  showResults() {
    window.addEventListener('scroll', this.showMoreOnScroll);
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

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
  };

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
      <div>
        <div className="flex-row top">
          <div className="flex-row">
            <i className="fas fa-plus plus-icon" onClick={this.toggleModal}></i>
          </div>
        </div>
        <div className="app-container">
            <h2 className="title">Localize LA</h2>
            <Search searchBusinesses={this.searchBusinesses} />
            <Map />
            <List displayedResults={this.state.displayedResults} />
            <Modal show={this.state.showModal} handleClose={this.toggleModal}><AddNew /></Modal>
        </div>
      </div>
    )
  }
}

export default App;

