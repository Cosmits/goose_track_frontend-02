import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

const AddFeedbackModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <FeedbackForm onClose={onClose} />
    </Modal>
  );
};

AddFeedbackModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddFeedbackModal;
