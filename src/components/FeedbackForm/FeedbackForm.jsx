const FeedbackForm = ({ onClose }) => {
  return (
    <div>
      <div>Rating</div>
      <button type="button" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default FeedbackForm;
