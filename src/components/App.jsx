import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { ImageGallery, Searchbar } from './index';
import './styles/styles.css';

export class App extends Component {
  state = {
    picture: '',
  };
  handleFormGetPicture = picture => {
    this.setState({ picture });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmitGetPicture={this.handleFormGetPicture} />
        <ImageGallery picture={this.state.picture} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
