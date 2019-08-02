import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    value: ""
  };

  handleOnChange = event => {
    this.setState({
      value: event.target.value
    });
    this.props.handleSearchBarChange(event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search cards..."
        value={this.state.value}
        onChange={this.handleOnChange}
      />
    );
  }
}

export default SearchBar;
