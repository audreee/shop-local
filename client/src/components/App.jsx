import React from 'react';
import axios from 'axios';
// import { Spinner } from 'react-bootstrap';

import Search from './Search.jsx';
import List from './List.jsx';
import Modal from './Modal.jsx';
import AddNew from './AddNew.jsx';
import Map from './Map.jsx';
import Spinner from './Spinner.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      displayedResults: [],
      showModal: false,
      currentLat: null,
      currentLong: null,
      mapLoading: true
    }

    this.searchBusinesses = this.searchBusinesses.bind(this);
    this.showResults = this.showResults.bind(this);
    this.showMoreOnScroll = this.showMoreOnScroll.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.toggleMapLoading = this.toggleMapLoading.bind(this);
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

  getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        currentLat: position.coords.latitude,
        currentLong: position.coords.longitude
      })
    });
  }

  toggleMapLoading() {
    this.setState({ mapLoading: !this.state.mapLoading })
  }

  componentDidMount() {
    this.getLocation();
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
            {this.state.mapLoading && <Spinner />}
            {this.state.currentLong && this.state.currentLat
            ? <Map currentLat={this.state.currentLat} currentLong={this.state.currentLong} businesses={this.state.results} toggleMapLoading={this.toggleMapLoading} />
            : null}
            <List displayedResults={this.state.displayedResults} />
            <Modal show={this.state.showModal} handleClose={this.toggleModal}><AddNew /></Modal>
        </div>
      </div>
    )
  }
}

export default App;

