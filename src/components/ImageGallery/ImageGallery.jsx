import ImageGalleryStyled from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ searchResult }) => {
  return (
    <ImageGalleryStyled>
      <ImageGalleryItem images={searchResult} />
    </ImageGalleryStyled>
  );
};

export default ImageGallery;
