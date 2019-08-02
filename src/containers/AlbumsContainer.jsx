import React, { Component } from "react";
import AlbumTile from "../components/AlbumTile";
import albumData from "../data/albumData";
import SearchBar from "../components/SearchBar";

class AlbumsContainer extends Component {
  state = {
    albumsOnSearch: [],
    value: ""
  };

  filterAlbums = () => {
    return albumData.filter(album => album.genre === this.props.genre);
  };

  filterArray = () => {
    return this.state.albumsOnSearch.filter(album =>
      album.albumName.toLowerCase().includes(this.state.value.toLowerCase())
    );
  };

  componentDidUpdate(prevProps) {
    if (this.props.genre !== prevProps.genre) {
      this.setState({
        albumsOnSearch: this.filterAlbums()
      });
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     albumsOnSearch: this.filterAlbums()
  //   });
  // }

  handleSearchBarChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <section>
        <SearchBar handleSearchBarChange={this.handleSearchBarChange} />
        {this.filterArray().map((album, index) => (
          <AlbumTile album={album} key={index} />
        ))}
      </section>
    );
  }
}

export default AlbumsContainer;
