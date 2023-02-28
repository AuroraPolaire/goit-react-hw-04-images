import { Backdrop, ModalWindow } from './Modal.styled';

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
