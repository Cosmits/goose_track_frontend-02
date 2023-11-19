import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';
import DeleteProfileForm from './DeleteProfileForm/DeleteProfileForm';


const DelProfileModal = ({ onClose }) => {

  return (
    <Modal onClose={onClose}>
      <DeleteProfileForm onClose={onClose} />
    </Modal>
  )
};

DelProfileModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default DelProfileModal;
