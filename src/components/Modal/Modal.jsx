import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    // закрив по Escspe
    if (event.code === 'Escape') {
      this.props.onCloses();
    }
  };
  handleBackDropClick = event => {
    // закрив по бекдроп
    if (event.target === event.currentTarget) {
      this.props.onCloses();
    }
  };
  render() {
    return (
      <div className="overlay">
        MODAL
        <div className="modal">
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
