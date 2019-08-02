import React, { Component } from "react";
import AlbumTile from "../components/AlbumTile";
import albumData from "../data/albumData";

class AlbumsContainer extends Component {
  filterAlbums = () => {
    return albumData.filter(album => album.genre === this.props.genre);
  };
  state = {
    albums: this.filterAlbums()
  };

  componentDidUpdate(prevProps) {
    if (this.props.genre !== prevProps.genre) {
      this.setState({
        albums: this.filterAlbums()
      });
    }
  }

  render() {
    return (
      <section>
        {this.state.albums.map((album, index) => (
          <AlbumTile album={album} key={index} />
        ))}
      </section>
    );
  }
}

export default AlbumsContainer;
