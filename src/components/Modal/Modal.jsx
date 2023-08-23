import { Component } from 'react';
import './Modal.css';

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
      this.props.onClick();
    }
  };
  handleBackDropClick = event => {
    // закрив по бекдроп
    if (event.target === event.currentTarget) {
      this.props.onClick();
    }
  };
  render() {
    return (
      <div className="Overlay" onClick={this.handleBackDropClick}>
        MODAL
        <div className="Modal">
          <img src={this.props.icon} alt="" />
        </div>
      </div>
    );
  }
}
