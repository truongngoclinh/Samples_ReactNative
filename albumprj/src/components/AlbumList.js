import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// // function component
// const AlbumList = () => {
//   return (
//     <View>
//       <Text>Album list !!!</Text>
//     </View>
//   );
// };
//
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    // debugger; // debug in chrome inspect
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} record={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
          {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
