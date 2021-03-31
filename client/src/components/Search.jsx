import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      terms: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ terms: e.target.value })
  }

  handleSubmit(e) {
    let terms = this.state.terms.split(' ');
    this.props.searchBusinesses(terms);
    this.setState({ terms: [] })
  }

  render() {
      return (
        <div className="flex-row centered search-bar">
          <input type="text" onChange={this.handleChange} value={this.state.terms}></input>
          <i className="fas fa-search search-icon" onClick={this.handleSubmit}></i>
        </div>
      )
  }

}

export default Search;

