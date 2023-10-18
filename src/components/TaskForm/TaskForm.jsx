import { useState, useEffect } from 'react';
import {
  ButtonContainer,
  ContainerForm,
  StyledCancel,
  StyledEdit,
  StyledInput,
  StyledInputTime,
  StyledLabel,
  StyledTime,
} from './TaskForm.styled';

const TaskForm = ({ initialData, closeModal }) => {
  const [formData, setFormData] = useState(
    initialData || {
      title: '',
      start: '',
      end: '',
      priority: 'low',
      date: '',
      category: 'to-do',
    },
  );
  const [isEditing, setIsEditing] = useState(!!initialData);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit}>
        <StyledLabel>
          Title
          <StyledInput
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter text"
            required
            maxLength="250"
          />
        </StyledLabel>

        <StyledTime>
          <StyledLabel>
            Start
            <StyledInputTime
              type="time"
              name="start"
              value={formData.start}
              onChange={handleInputChange}
              required
              pattern="[0-9]{2}:[0-9]{2}"
            />
          </StyledLabel>
          <StyledLabel>
            End
            <StyledInputTime
              type="time"
              name="end"
              value={formData.end}
              onChange={handleInputChange}
              required
              pattern="[0-9]{2}:[0-9]{2}"
              min={formData.start}
            />
          </StyledLabel>
        </StyledTime>

        <div>
          <label>
            <input
              type="radio"
              name="priority"
              value="low"
              checked={formData.priority === 'low'}
              onChange={handleInputChange}
              required
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              value="medium"
              checked={formData.priority === 'medium'}
              onChange={handleInputChange}
              required
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              value="high"
              checked={formData.priority === 'high'}
              onChange={handleInputChange}
              required
            />
            High
          </label>
        </div>

        {/* <StyledLabel>
          Date
          <StyledInput
            type="text"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
            pattern="\d{4}-\d{2}-\d{2}"
          />
        </StyledLabel> */}

        {/* <div>
          <label>
            <input
              type="radio"
              name="category"
              value="to-do"
              checked={formData.category === 'to-do'}
              onChange={handleInputChange}
              required
            />
            To-Do
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="in-progress"
              checked={formData.category === 'in-progress'}
              onChange={handleInputChange}
              required
            />
            In-Progress
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="done"
              checked={formData.category === 'done'}
              onChange={handleInputChange}
              required
            />
            Done
          </label>
        </div> */}

        {errorMessage && <div>{errorMessage}</div>}

        <ButtonContainer>
          <StyledEdit type="submit">
            {isEditing ? 'Edit' : 'Create'}Edit
          </StyledEdit>
          <StyledCancel type="button" onClick={handleCancel}>
            Cancel
          </StyledCancel>
        </ButtonContainer>
      </form>
    </ContainerForm>
  );
};

export default TaskForm;
