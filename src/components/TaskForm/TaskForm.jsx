import { useState, useEffect } from 'react';
import {
  AddTask,
  ButtonContainer,
  ContainerForm,
  ContainerRadio,
  Label,
  PencilIcon,
  StyledAdd,
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

  const [isEditing, setIsEditing] = useState(!!initialData);
  const [errorMessage, setErrorMessage] = useState('');
  const [todos, setTodos] = useState([]); 


  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [initialData]);

  const handleEdit = (editedTodo) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === editedTodo.id ? editedTodo : todo
      );
      return updatedTodos;
    });
    closeModal();
  };

  const handleAdd = (newTodo) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      return updatedTodos;
    });
    closeModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Перевірка відповідності категорії в списку допустимих
    const validCategories = ['to-do', 'in-progress', 'done'];
    if (!validCategories.includes(formData.category)) {
      setErrorMessage('Invalid category. Choose from: to-do, in-progress, done.');
      return;
    }

    if (isEditing) {
      handleEdit(formData);
    } else {
      handleAdd(formData);
    }
    setFormData(initialData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    closeModal();
    setIsEditing(false);
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
              pattern="[0-1][0-9]:[0-5][0-9]"
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
              pattern="[0-1][0-9]:[0-5][0-9]"
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
          {isEditing ? (
            <StyledEdit onClick={handleEdit} type="submit"><PencilIcon/>Edit</StyledEdit>
          ) : (
            <StyledAdd onClick={handleAdd} type="submit"><AddTask/>Add</StyledAdd>
          )}
          <StyledCancel type="button" onClick={handleCancel}>
            Cancel
          </StyledCancel>
        </ButtonContainer>
      </form>
    </ContainerForm>
  );
};

export default TaskForm;
