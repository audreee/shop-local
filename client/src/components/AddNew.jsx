import React from 'react';

class AddNew extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      category: '',
      phone: '',
      website: '',
      address_line_1: '',
      address_line_2: '',
      city: '',
      state: '',
      zip: '',
      community: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleNewSubmit = this.handleNewSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSelectChange(e) {
    this.setState({ community: e.target.value})
  }

  handleNewSubmit(e) {
    console.log('Thanks!')
  }

  render() {
    return (
      <div className="flex-column centered add-new">
        <input type="text" name="name" value={this.state.name} placeholder="Business Name" onChange={this.handleChange}></input>
        <input type="text" name="category" value={this.state.category} placeholder="Category" onChange={this.handleChange}></input>
        <input type="tel" name="phone" value={this.state.phone} placeholder="Phone" onChange={this.handleChange}></input>
        <input type="text" name="website" value={this.state.website} placeholder="Website" onChange={this.handleChange}></input>
        <input type="text" name="address_line_1" value={this.state.address_line_1} placeholder="Address Line 1" onChange={this.handleChange}></input>
        <input type="text" name="address_line_2" value={this.state.address_line_2} placeholder="Address Line 2" onChange={this.handleChange}></input>
        <input type="text" name="city" value={this.state.city} placeholder="City" onChange={this.handleChange}></input>
        <input type="text" name="state" value={this.state.state} placeholder="State" onChange={this.handleChange}></input>
        <input type="text" name="zip" value={this.state.zip} placeholder="Zip Code" onChange={this.handleChange}></input>
        <select id="select" name="community" value={this.state.community} onChange={this.handleSelectChange}>
          <option value="Black">Black-owned Business</option>
          <option value="AAPI">AAPI-owned Business</option>
        </select>
        <button onClick={this.handleNewSubmit}>Submit</button>
      </div>
    )
  }
}

export default AddNew;