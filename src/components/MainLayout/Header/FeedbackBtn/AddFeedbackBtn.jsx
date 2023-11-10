import "./AddFeedbackBtn.css";

import { AddFeedbackButton } from "./AddFeedbackBtn.styled";
import { FaSquareFacebook } from "react-icons/fa6";


const AddFeedbackBtn = ({ openModal }) => {

  return <>
    <AddFeedbackButton onClick={openModal}>
      <div className="icon-group">
        <FaSquareFacebook className="fa-facebook"/>
        <span className="icon-text">Feedback</span>
        <span className="icon-bg"></span>
      </div>
    </AddFeedbackButton>

  </>

};

export default AddFeedbackBtn;
