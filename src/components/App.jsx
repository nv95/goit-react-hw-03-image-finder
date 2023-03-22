import { Component } from 'react';
import SearchBar from './Searchbar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    query: '',
  };

  handleSubmit = searchQuery => {
    this.setState({ query: searchQuery });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery searchQuery={this.state.query} />
      </>
    );
  }
}
export default App;
