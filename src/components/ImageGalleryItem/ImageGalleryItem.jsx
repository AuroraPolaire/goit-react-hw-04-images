import ImageGalleryItemStyled from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    imageUrl: '',
    imageTag: '',
    pressedKey: '',
  };

  openModal = event => {
    this.setState({ imageUrl: event.target.getAttribute('data-url') });
    this.setState({ imageTag: event.target.getAttribute('data-tag') });
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  onKeyDown = event => {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    const { images } = this.props;
    return (
      <>
        {images.map(image => {
          return (
            <ImageGalleryItemStyled key={image.id}>
              {this.state.isModalOpen && (
                <Modal
                  image={this.state.imageUrl}
                  imageTag={this.state.imageTag}
                  closeModal={this.closeModal}
                />
              )}

              <img
                className="galleryImg"
                src={image.webformatURL}
                alt={image.tags}
                data-tag={image.tags}
                data-url={image.largeImageURL}
                onClick={this.openModal}
              />
            </ImageGalleryItemStyled>
          );
        })}
      </>
    );
  }
}

export default ImageGalleryItem;
