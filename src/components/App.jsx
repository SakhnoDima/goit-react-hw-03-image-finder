import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { ImageGallery, Loader, Modal, Searchbar } from './index';
import './styles/styles.css';

const KAY = '38565810-29740f5778639307be3f3659c';

export class App extends Component {
  state = {
    picture: '',
    page: 1,
    pictureList: null,
    loading: false,
    icon: '',
    modalShow: false,
    totalHits: null,
  };
  async componentDidUpdate(_, prevState) {
    const prevPicture = prevState.picture;
    const nextPicture = this.state.picture;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevPicture !== nextPicture) {
      try {
        this.setState({ loading: true });
        fetch(
          `https://pixabay.com/api/?q=${nextPicture}&page=${this.state.page}&key=${KAY}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error('Sorry! We have some problem. Try again later! ')
            );
          })
          .then(pictureList => {
            const { hits, totalHits } = pictureList;
            this.setState({ totalHits });
            this.setState({ pictureList: [...hits] });
            const { total } = pictureList;
            if (total === 0) {
              this.setState({ pictureList: null });
              return toast.error('Image not found');
            }
          })
          .catch(error => toast.error(error.message))
          .finally(this.setState({ loading: false }));
      } catch (error) {
        console.log(error);
      }
    }
    if (prevPage !== nextPage) {
      this.lastPage();
      try {
        this.setState({ loading: true });
        fetch(
          `https://pixabay.com/api/?q=${nextPicture}&page=${this.state.page}&key=${KAY}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error('Sorry! We have some problem. Try again later! ')
            );
          })
          .then(pictureList => {
            const { hits } = pictureList;
            this.setState(prevState => ({
              pictureList: [...prevState.pictureList, ...hits],
            }));
          })
          .catch(error => toast.error(error.message))
          .finally(this.setState({ loading: false }));
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
  handlGetIcon = url => {
    this.setState(prevState => ({ modalShow: !prevState.modalShow }));
    this.setState({ icon: url });
  };
  handleToggleModalShow = () => {
    this.setState(prevState => ({ modalShow: !prevState.modalShow }));
  };
  lastPage = () => {
    const { totalHits, page } = this.state;
    if (page * 12 > totalHits) toast.error('Its last page');
  };
  render() {
    const { pictureList, loading, modalShow, totalHits, page } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmitGetPicture={this.handleFormGetPicture} />
        <ImageGallery pictureList={pictureList} onClick={this.handlGetIcon} />
        <Loader visible={loading} />
        <ToastContainer autoClose={3000} />
        {page * 12 < totalHits && (
          <button className="Button" type="button" onClick={this.handleOnclick}>
            Load more
          </button>
        )}
        {modalShow && (
          <Modal onClick={this.handleToggleModalShow} icon={this.state.icon} />
        )}
      </div>
    );
  }
}
