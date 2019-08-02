import React, { Component } from "react";

class AlbumTile extends Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  showInfo = () => {
    return (
      <React.Fragment>
        <h2>{this.props.album.albumName}</h2>
        <p>{this.props.album.artist}</p>
        <p>{this.props.album.released}</p>
      </React.Fragment>
    );
  };

  render() {
    return (
      <article onClick={this.handleClick}>
        <img src={this.props.album.image} alt="" />
        {this.state.isClicked ? this.showInfo() : null}
      </article>
    );
  }
}

export default AlbumTile;
