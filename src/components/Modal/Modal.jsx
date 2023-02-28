import { Backdrop, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';

const Modal = ({ image, closeModal, imageTag }) => {
  return (
    <>
      {}
      <Backdrop onClick={closeModal}>
        <ModalWindow src={image} alt={imageTag} onClick={closeModal} />
      </Backdrop>
    </>
  );
};

export default Modal;

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  imageTag: PropTypes.string.isRequired,
};
