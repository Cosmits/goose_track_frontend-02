import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Rating } from 'react-simple-star-rating';
import PropTypes from 'prop-types';

import {
  useCreateReviewMutation,
  useDeleteReviewMutation,
  useEditReviewMutation,
  useGetUserReviewQuery,
} from '../../../../redux/reviews/reviewsApi';
import { selectTheme } from '../../../../redux/theme/themeSlice';
import { showErrorToast, showSuccessToast } from '../../../../services/showToast';

import {
  RatingLabel,
  Btn,
  BtnWrapper,
  Form,
  IconContainer,
  RatingWrapper,
  EditIcon,
  DeleteIcon,
  CloseBtn,
  TextArea,
  TextAreaLabel,
} from './FeedbackForm.styled';


const FeedbackForm = ({ onClose }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isEditReview, setIsEditReview] = useState(false);
  const [isDeleteReview, setIsDeleteReview] = useState(false);

  const { data: userReviewData } = useGetUserReviewQuery();

  const [createReview] = useCreateReviewMutation();
  const [editReview] = useEditReviewMutation();
  const [deleteReview] = useDeleteReviewMutation();

  const theme = useSelector(selectTheme);

  useEffect(() => {
    if (userReviewData) {
      setRating(userReviewData.data.rating);
      setComment(userReviewData.data.comment);
    } else {
      setRating(5);
      setComment('');
    }
  }, [userReviewData]);

  const handleEditReview = () => {
    setIsEditReview(true);
    setIsDeleteReview(false);
  };

  const handleDeleteReview = () => {
    setIsEditReview(false);
    setIsDeleteReview(true);
  };

  const handleChangeReview = (event) => {
    const text = event.target.value;
    if (text.length <= 300) {
      setComment(text);
    } else {
      showErrorToast('Feedback length cannot exceed 300 characters', theme);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEditReview) {
      try {
        await editReview({ comment, rating }).unwrap();
        showSuccessToast('Review successfully edited', theme);
        setIsEditReview(false);
        onClose();
      } catch (error) {
        showErrorToast('All fields are required', theme);
      }
    } else {
      try {
        await createReview({ comment, rating }).unwrap();
        showSuccessToast('Thanks for your review', theme);
        onClose();
      } catch (error) {
        showErrorToast('All fields are required', theme);
      }
    }
  };

  const handleDelete = async () => {
    try {
      await deleteReview();
      showSuccessToast('Review successfully deleted', theme);
      setIsDeleteReview(false);
      onClose();
    } catch (error) {
      showErrorToast('Sorry, your review has not deleted', theme);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <RatingWrapper>
        <RatingLabel>Rating</RatingLabel>
        <Rating
          name="rating"
          id="rating"
          onClick={(value) => setRating(value)}
          fillColor="gold"
          readonly={!isEditReview && userReviewData}
          emptyColor="lightgrey"
          pointerEvents="none"
          size={32}
          initialValue={rating}
          onChange={(value) => setRating(value)}
          style={{ marginLeft: '-4px', marginTop: '2px' }}
        />
      </RatingWrapper>
      <CloseBtn onClick={onClose} />
      <TextAreaLabel htmlFor="review">
        Review
        {userReviewData && (
          <IconContainer>
            <EditIcon onClick={handleEditReview} />
            <DeleteIcon onClick={handleDeleteReview} />
          </IconContainer>
        )}
      </TextAreaLabel>
      <TextArea
        name="comment"
        id="comment"
        value={comment}
        placeholder="Enter text"
        onChange={handleChangeReview}
        disabled={!isEditReview && userReviewData}
      />
      {isDeleteReview && (
        <BtnWrapper>
          <Btn type="button" onClick={handleDelete} className="active">
            Delete
          </Btn>
          <Btn type="button" onClick={onClose} className="inactive">
            Cancel
          </Btn>
        </BtnWrapper>
      )}
      {isEditReview && (
        <BtnWrapper>
          <Btn type="submit" onClick={handleSubmit} className="active">
            Edit
          </Btn>
          <Btn type="button" onClick={onClose} className="inactive">
            Cancel
          </Btn>
        </BtnWrapper>
      )}
      {!userReviewData && (
        <BtnWrapper>
          <Btn type="submit" className="active">
            Save
          </Btn>
          <Btn type="button" onClick={onClose} className="inactive">
            Cancel
          </Btn>
        </BtnWrapper>
      )}
    </Form>
  );
};

FeedbackForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default FeedbackForm;
