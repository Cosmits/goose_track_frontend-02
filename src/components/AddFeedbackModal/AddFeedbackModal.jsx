import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';
import FeedbackForm from './FeedbackForm/FeedbackForm';
 import Loader from '../MainLayout/Loader/Loader';

 import { useGetUserReviewQuery} from '../../redux/reviews/reviewsApi';

const AddFeedbackModal = ({ onClose }) => {

   const { isLoading } = useGetUserReviewQuery();

// if (isLoading) {
//   return <Loader />;
// }
  return (
  <>
  {isLoading ? <Loader /> : (
    <Modal onClose={onClose}>
      <FeedbackForm onClose={onClose} />
    </Modal>
  )}
</>
)
};

AddFeedbackModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddFeedbackModal;
