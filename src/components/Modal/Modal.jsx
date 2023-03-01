import { Backdrop, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Modal extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    imageTag: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <>
        {}
        <Backdrop onClick={this.props.closeModal}>
          <ModalWindow
            src={this.props.image}
            alt={this.props.imageTag}
            onClick={this.props.closeModal}
          />
        </Backdrop>
      </>
    );
  }
}

export default Modal;
