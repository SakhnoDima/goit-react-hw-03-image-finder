import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ImageGallery, Searchbar } from './index';
import './styles/styles.css';

const KAY = '38565810-29740f5778639307be3f3659c';

export class App extends Component {
  state = {
    picture: '',
    page: 1,
    pictureList: null,
  };
  async componentDidUpdate(_, prevState) {
    const prevPicture = prevState.picture;
    const nextPicture = this.state.picture;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevPicture !== nextPicture) {
      try {
        fetch(
          `https://pixabay.com/api/?q=${nextPicture}&page=${this.state.page}&key=${KAY}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(res => res.json())
          .then(pictureList => {
            this.setState({ pictureList });
            const { total } = pictureList;
            if (total === 0) {
              return toast.error('Image not found');
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
    if (prevPage !== nextPage) {
      try {
        fetch(
          `https://pixabay.com/api/?q=${nextPicture}&page=${this.state.page}&key=${KAY}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(res => res.json())
          .then(pictureList => {
            this.setState({ pictureList });
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
  handleFormGetPicture = picture => {
    this.setState({ picture, page: 1 });
  };
  handleOnclick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { pictureList } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmitGetPicture={this.handleFormGetPicture} />
        <ImageGallery pictureList={pictureList} />
        <ToastContainer autoClose={3000} />
        {pictureList && (
          <button className="Button" type="button" onClick={this.handleOnclick}>
            Load more
          </button>
        )}
      </div>
    );
  }
}
