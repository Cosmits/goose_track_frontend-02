import { useState, useEffect } from 'react';
import {
  ButtonContainer,
  ContainerForm,
  ContainerRadio,
  Label,
  StyledCancel,
  StyledEdit,
  StyledInput,
  StyledInputTime,
  StyledLabel,
  StyledRadioHigh,
  StyledRadioLow,
  StyledRadioMedium,
  StyledTime,
} from './TaskForm.styled';

const TaskForm = ({ initialData, closeModal }) => {
  const [formData, setFormData] = useState(
    initialData || {
      title: '',
      start: '09:00',
      end: '09:30',
      priority: 'low',
      date: '',
      category: 'to-do',
    }
  );

  // const [isEditing, setIsEditing] = useState(!!initialData);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
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

        <ContainerRadio>
          <Label>
            <StyledRadioLow
              type="radio"
              name="priority"
              value="low"
              checked={formData.priority === 'low'}
              onChange={handleInputChange}
              required
            />
            Low
          </Label>
          <Label>
            <StyledRadioMedium
              type="radio"
              name="priority"
              value="medium"
              checked={formData.priority === 'medium'}
              onChange={handleInputChange}
              required
            />
            Medium
          </Label>
          <Label>
            <StyledRadioHigh
              type="radio"
              name="priority"
              value="high"
              checked={formData.priority === 'high'}
              onChange={handleInputChange}
              required
            />
            High
          </Label>
        </ContainerRadio>

        {errorMessage && <div>{errorMessage}</div>}

        <ButtonContainer>
      {/* {isEditing ? (
        <StyledEdit type="submit" onClick={handleEdit}>
          Edit
        </StyledEdit>
      ) : (
        <StyledAdd type="submit" onClick={handleAdd}>
          Add
            <SVG>
              <use href="../../icons/popUp/plus.svg#plus"></use>
            </SVG>
        </StyledAdd>
      )} */}
          <StyledEdit type="submit">
            Edit
          {/* <svg width="18px" height="18px">
            <use href="../../icons/popUp/pencil.svg#pencil"></use>
          </svg> */}
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
