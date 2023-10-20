import { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import PropTypes from 'prop-types';

import {
  useCreateReviewMutation,
  useDeleteReviewMutation,
  useEditReviewMutation,
  useGetUserReviewQuery,
} from '../../redux/reviews/reviewsApi';

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
  const [review, setReview] = useState('');
  const [isEditReview, setIsEditReview] = useState(false);
  const [isDeleteReview, setIsDeleteReview] = useState(false);

  const { data: userReviewData } = useGetUserReviewQuery();
  const [createReview] = useCreateReviewMutation();
  const [editReview] = useEditReviewMutation();
  const [deleteReview] = useDeleteReviewMutation();

  useEffect(() => {
    if (userReviewData) {
      setRating(userReviewData.data.rating);
      setReview(userReviewData.data.review);
    } else {
      setRating(5);
      setReview('');
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
      setReview(text);
    } else {
      console.log('Error');
      //  toast.error(message, toastOptions);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEditReview) {
      try {
        await editReview({ review, rating }).unwrap();
        //   toast.success(message, toastOptions);
        setIsEditReview(false);
        onClose();
      } catch (error) {
        console.log('error: ', error);
        //    toast.error(message, toastOptions);
      }
    } else {
      try {
        await createReview({ review, rating }).unwrap();
        //  toast.success(message, toastOptions);
        onClose();
      } catch (error) {
        console.log('error: ', error);
        // toast.error(message, toastOptions);
      }
    }
  };

  const handleDelete = async () => {
    try {
      await deleteReview();

      //  toast.success(message, toastOptions);
      setIsDeleteReview(false);
      onClose();
    } catch (error) {
      console.log('error: ', error);
      //  toast.error(message, toastOptions);
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
        name="review"
        id="review"
        value={review}
        placeholder="Enter text"
        onChange={handleChangeReview}
        disabled={!isEditReview && userReviewData}
      />
      {isDeleteReview && (
        <BtnWrapper>
          <Btn type="button" onClick={handleDelete} isActive={true}>
            Delete
          </Btn>
          <Btn type="button" onClick={onClose}>
            Cancel
          </Btn>
        </BtnWrapper>
      )}
      {isEditReview && (
        <BtnWrapper>
          <Btn type="submit" onClick={handleSubmit} isActive={true}>
            Edit
          </Btn>
          <Btn type="button" onClick={onClose}>
            Cancel
          </Btn>
        </BtnWrapper>
      )}
      {!userReviewData && (
        <BtnWrapper>
          <Btn type="submit" isActive={true}>
            Save
          </Btn>
          <Btn type="button" onClick={onClose}>
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
