import { AddFeedbackButton } from "./AddFeedbackBtn.styled";
const AddFeedbackBtn = ({openModal}) => {
  
  return <AddFeedbackButton onClick={openModal}> Feedback</AddFeedbackButton>;
 };

export default AddFeedbackBtn;
