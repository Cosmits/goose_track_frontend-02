// import React from 'react';
import Modal from '../Modal/Modal';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

const AddFeedbackModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <FeedbackForm onClose={onClose} />
    </Modal>
  );
};

export default AddFeedbackModal;
